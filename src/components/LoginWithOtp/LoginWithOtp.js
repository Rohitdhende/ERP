import {
  Box,
  Button,
  Container,
  FormControl,
  FormGroup,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Logo from '../../assets/logo.png';

const LoginWithOtp = () => {
  const [OTP, setOTP] = useState(false);
  return (
    <Box
      sx={{
        flex: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1rem',
        backgroundColor: 'white',
        paddingY: 5,
        margin: 0,
      }}
    >
      <img src={Logo} alt="logo" height="50px" />
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        Welcome Back!
      </Typography>
      <Typography sx={{ marginBottom: '2rem', color: '#A5A4A7' }}>
        Member Login
      </Typography>
      {OTP ? (
        <>
          <Container
            sx={{
              display: 'flex',
              width: '70%',
              justifyContent: 'space-evenly',
            }}
          >
            <TextField sx={{ width: '3rem' }} />
            <TextField sx={{ width: '3rem' }} />
            <TextField sx={{ width: '3rem' }} />
            <TextField sx={{ width: '3rem' }} />
          </Container>
          <Button
            sx={{
              backgroundColor: '#6BDB8A',
              color: 'white',
              '&:hover': {
                backgroundColor: '#58B85D',
              },
              width: '70%',
              borderRadius: '10px',
              paddingY: '0.5rem',
            }}
          >
            Login
          </Button>
        </>
      ) : (
        <>
          <TextField
            label="With normal TextField"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '70%' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+91</InputAdornment>
              ),
            }}
          />

          <Button
            sx={{
              backgroundColor: '#6BDB8A',
              color: 'white',
              '&:hover': {
                backgroundColor: '#58B85D',
              },
              width: '70%',
              borderRadius: '10px',
              paddingY: '0.5rem',
            }}
            onClick={() => setOTP(true)}
          >
            Send OTP
          </Button>
        </>
      )}
    </Box>
  );
};

export default LoginWithOtp;
