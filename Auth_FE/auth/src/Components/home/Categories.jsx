import { Box, Typography, Grid, Paper } from '@mui/material';
import { Category } from '@mui/icons-material';

const categories = ['Fashion', 'Electronics', 'Home Decor', 'Beauty'];

const Categories = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Shop by Category
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
        {categories.map((cat, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <Category fontSize="large" />
              <Typography variant="h6" mt={1}>
                {cat}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;
