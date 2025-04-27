import { Box, Typography, Grid, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#222', color: 'white', py: 5 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>ShopEase</Typography>
          <Typography>Connecting you to style and innovation.</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>Contact</Typography>
          <Typography>Email: info@shopease.com</Typography>
          <Typography>Phone: +123 456 7890</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>Follow Us</Typography>
          <Box>
            <IconButton color="inherit"><Facebook /></IconButton>
            <IconButton color="inherit"><Instagram /></IconButton>
            <IconButton color="inherit"><Twitter /></IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
