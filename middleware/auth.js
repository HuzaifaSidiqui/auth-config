const jwt = require('jsonwebtoken');
//Authentication middleware
exports.requireLogin = (req, res, next) =>{
    try {
        if(!req.headers.authorization){
            return res.status(401).json({message: "Unauthorized"});
        }
        const token = req.headers.authorization.split(" ")[1];
        if(!token){
            return res.status(401).json({message: "Token is missing"});
        }
        // Verify the token
        const decode = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({message: "Unauthorized"});
    }
}