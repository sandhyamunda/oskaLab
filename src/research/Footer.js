import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import logo from '../asset/oslab.png'

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        px: 32,
        py: 3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid #ddd',
      }}
    >
      <Box display="flex" alignItems="center">
        <img src={logo} alt="Osakalab Logo" style={{ height: 40, marginRight: 10 }} />
        <Typography variant="body2" color="primary.main" direction='row'>
          OSAKALAB<br/>
          Laboratories
          </Typography>
         
      </Box>

      <Stack direction="row" spacing={4}>
        <Box display="flex"  alignItems='center'>
          <LocationOnIcon fontSize="small" sx={{ mr: 1,border:2, color: 'primary.main',
             padding:1 }} />
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
        
          <PhoneIcon fontSize="small" sx={{ mr: 1,border:2,
             color: 'primary.main',
             padding:1 }} />
          <Box>
          <Link href="tel:+12343434341" variant="body2" color="inherit" underline="hover">
          <Typography variant='body2'>Call us for detail</Typography>
          <Typography sx={{color: 'primary.main',}}>+1 234 3434 341</Typography>
          </Link>
          </Box>
        </Box>
        <Box sx={{border:2,
            color: 'primary.main',
            padding:1
         }}>
            GET QUOTE
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;