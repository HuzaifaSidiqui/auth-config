import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';

const products = [
  { title: 'Stylish Shirt', price: '$49', image: 'https://via.placeholder.com/300' },
  { title: 'Smart Watch', price: '$199', image: 'https://via.placeholder.com/300' },
  { title: 'Trendy Shoes', price: '$89', image: 'https://via.placeholder.com/300' },
];

const Products = () => {
  return (
    <Box id="products" sx={{ py: 10 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Featured Products
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card>
                <CardMedia component="img" height="200" image={product.image} alt={product.title} />
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {product.price}
                  </Typography>
                  <Button variant="outlined" size="small" sx={{ mt: 2 }}>
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
