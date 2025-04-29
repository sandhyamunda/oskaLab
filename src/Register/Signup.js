import React from 'react';
import HouseIcon from '@mui/icons-material/House';
import {
  Box,
  Typography,
  TextField,
  Divider,
  Link,
  Button,
  
} from '@mui/material';


function Signup(){
    return(
        <Box>
        <Box justifyContent="space-between" ml={30} pt={5} width={800}>
        <Typography variant="body1" gutterBottom >
         <HouseIcon /> REGISTER
        </Typography>
        <Divider sx={{ mb: 2 }} />
        </Box>
    <Box className="login-container"  justifyContent="space-between" ml={50} pt={0} >
      {/* Login Form */}
      <Box className="login" width="400px" >
        <Typography variant="h5" gutterBottom textAlign="center">
          Register
        </Typography>
        <Box component="form">
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            label="Username or email"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            type="mail"
            label="mail@example.com"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
            label="Password"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
            label="Repeat password"
            required
          />
         
          <Button type="submit" variant="contained" fullWidth>
            Submit
          </Button>
            <Typography variant="body2"  textAlign="center" mt={2}>
             Already have an account?{' '}
            <Link href="/register" underline="hover">
                Login
            </Link>
            </Typography>
            <Typography variant='body2'>
                Hint: The password should be at least eight characters login
                to make it strong use upper and lower case letters number
                and symbals like ! * ? $ % ^ &
            </Typography>
          
          
        </Box>
      </Box>
    </Box>
    </Box>

    )
} export default Signup;