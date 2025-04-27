import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box id="home" sx={{ height: '100vh', background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)', display: 'flex', alignItems: 'center' }}>
      <Container>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Typography variant="h2" fontWeight={700} gutterBottom>
            Discover the Latest Trends
          </Typography>
          <Typography variant="h6" mb={3}>
            Shop the most exclusive collections.
          </Typography>
          <Button variant="contained" size="large">
            Shop Now
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
