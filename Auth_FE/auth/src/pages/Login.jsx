import React, { useState } from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

// const [isAuthenticated, setIsAuthenticated] = useState(false)
// export const authenticated = () =>{
//   return isAuthenticated;
// }

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {
      email: formData.email === "",
      password: formData.password === "",
    };

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
        axios.post('http://localhost:4001/auth/login', formData, {
            headers:{"Content-Type" : "application/json"},
        })
          .then(function (response) {
            console.log(response);
            navigate("/home")
          })
          .catch(function (error) {
            console.log(error);
          });
    //   console.log("Form Submitted:", formData);
      // setIsAuthenticated(true);
      alert("Login Successful! 🎉");
    }
  };
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 5,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login to Your Account
        </Typography>

        <form onSubmit={handleSubmit}>

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            helperText={errors.email ? "Email is required" : ""}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            helperText={errors.password ? "Password is required" : ""}
            margin="normal"
          />

          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
}
