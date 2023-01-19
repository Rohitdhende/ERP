import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { MuiOtpInput } from 'mui-one-time-password-input';

const LoginWithOtp = () => {
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [otp, setOtp] = React.useState('');

  const handleChange = (newValue) => {
    setOtp(newValue);
  };
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
      {isOtpVisible ? (
        <>
          <Container
            sx={{
              display: 'flex',
              width: '70%',
              justifyContent: 'space-evenly',
            }}
          >
            <MuiOtpInput value={otp} onChange={handleChange} />
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
            onClick={() => setIsOtpVisible(true)}
          >
            Send OTP
          </Button>
        </>
      )}
    </Box>
  );
};

export default LoginWithOtp;
