import React from 'react';
import { Box, Typography, Link, Stack, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import logo from '../asset/oslab.png'
import FooterTheme from '../CSS/Footer/FooterTheme';

const Footer = () => {
const theme = useTheme();
const style = FooterTheme(theme);
  return (
    <Box
      sx={style.container}
    >
      <Box display="flex" alignItems="center">
        <img src={logo} alt="Osakalab Logo"
         style={{ height: 40, marginRight: 10 }} />
        <Typography variant="body2" color="primary.main" direction='row'>
          OSAKALAB<br/>
          Laboratories
          </Typography> 
      </Box>
      <Stack direction="row" spacing={4}>
        <Box display="flex"  alignItems='center'>
          <LocationOnIcon fontSize="small" sx={style.location} />
          <Box>
          <Typography variant="body2" color="text.secondary">
            Headquarters</Typography>
          <Typography sx={{color: 'primary.main',}}>
            Brooklyn, New York
          </Typography>
          </Box>
        </Box>

        <Box sx={{display:"flex",
             alignItems:"center"}} >
        
          <PhoneIcon  sx={style.phoneicon} />
          <Box>
          <Link href="tel:+12343434341" variant="body2" color="inherit" underline="hover">
          <Typography variant='body2'>Call us for detail</Typography>
          <Typography sx={style.phonenumber}>+1 234 3434 341</Typography>
          </Link>
          </Box>
        </Box>
        <Box sx={style.getcontainer}>
            GET QUOTE
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;