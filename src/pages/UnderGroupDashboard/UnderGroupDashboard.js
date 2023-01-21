import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import React from 'react';
import UserDataModal from '../../components/LoginWithOtp/UserDataModal/UserDataModal';

const UnderGroupDashboard = () => {
  const [isUserModalModalOpen, setIsUserModalOpen] = useState(false);
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant={{ lg: 'h4', md: 'h4', sm: 'h5', xs: 'h5' }}
        sx={{ marginTop: '3rem' }}
      >
        Under Group Admin Dashboard
      </Typography>
      <Button
        variant="contained"
        onClick={() => setIsUserModalOpen(true)}
        sx={{ marginTop: '3rem' }}
      >
        Add Location
      </Button>

      <UserDataModal
        isOpen={isUserModalModalOpen}
        onClose={(value) => setIsUserModalOpen(value)}
        modalHeading="Add Location"
      />
    </div>
  );
};

export default UnderGroupDashboard;
