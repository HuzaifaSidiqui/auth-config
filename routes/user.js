const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {requireLogin} = require('../middleware/auth');

router.post('/register', async(req,res)=>{
    const {name,email,password} = req.body;
    try {
        if(!name || !email || !password){
            return res.status(400).json({message: "All fields are required"})
        }
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "User already exists"})
        }
        const hashed_password = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashed_password
        })
        await newUser.save();
        res.status(201).json({message: "New user created"});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal server error"});
    }
})

//login route
router.post('/login', async (req,res)=>{
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "User not found"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid credentials"});
        }
        const token = jwt.sign({
            _id: user._id}, 
            process.env.TOKEN_SECRET, 
            {expiresIn: '1hr'});
        return res.json({token});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal server error"});
    }
})

//setting a protected route
router.get('/', requireLogin, async (req, res)=>{
    try {
        const user = await User.findById(req.user._id).select("-password");
        if(!user){
            return res.status(400).json({message: "User not found"});
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal server error"});
    }
} )

module.exports = router;