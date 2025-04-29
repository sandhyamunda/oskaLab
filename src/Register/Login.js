

import React from 'react';
import HouseIcon from '@mui/icons-material/House';
import {
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Divider,
  Link,
  Button,
  
} from '@mui/material';

const Login = () => {
  return (
    <Box>
        <Box justifyContent="space-between" ml={30} pt={10} width={800}>
        <Typography variant="body1" gutterBottom >
         <HouseIcon /> LOG IN
        </Typography>
        <Divider sx={{ mb: 2 }} />
        </Box>
    <Box className="login-container"  justifyContent="space-between" ml={50} pt={0} >
      {/* Login Form */}
      <Box className="login" width="400px" >
        <Typography variant="h5" gutterBottom textAlign="center">
          Login
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
            type="password"
            label="Password"
            required
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
          />
          <Link href="#" underline="hover" ml={15}>
              Forgot password?
            </Link>
          <Button type="submit" variant="contained" fullWidth>
            Submit
          </Button>
          <Typography variant="body2"  textAlign="center" mt={2}>
            Don't have any account?{' '}
            <Link href="/register" underline="hover">
                Register here
            </Link>
            </Typography>
          
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default Login;