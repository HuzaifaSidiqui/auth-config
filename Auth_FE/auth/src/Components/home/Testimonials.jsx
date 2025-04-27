import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';

const testimonials = [
  { name: 'John Doe', review: 'Excellent service!' },
  { name: 'Jane Smith', review: 'Love the quality and speed.' },
  { name: 'Mike Taylor', review: 'My go-to online store!' },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Box id="reviews" sx={{ py: 10 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Customer Reviews
      </Typography>
      <Box sx={{ width: '60%', margin: 'auto', mt: 4 }}>
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <Box key={index} sx={{ textAlign: 'center', p: 3 }}>
              <Typography variant="h6" gutterBottom>
                "{t.review}"
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                — {t.name}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Testimonials;
