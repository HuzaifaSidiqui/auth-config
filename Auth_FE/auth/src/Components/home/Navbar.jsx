import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ bgcolor: 'transparent', boxShadow: 'none', backdropFilter: 'blur(10px)' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ShopEase
        </Typography>
        <Box>
          {['Home', 'About', 'Products', 'Contact'].map((section) => (
            <Link
              key={section}
              to={section.toLowerCase()}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button color="inherit">{section}</Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
