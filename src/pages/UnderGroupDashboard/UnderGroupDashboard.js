import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
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
      <Typography variant="h4" sx={{ marginTop: '3rem' }}>
        Under Group Admin Dashboard
      </Typography>
      <Button
        variant="contained"
        onClick={() => setIsUserModalOpen(true)}
        sx={{ marginTop: '3rem' }}
      >
        Add User Details
      </Button>

      <UserDataModal
        isOpen={isUserModalModalOpen}
        onClose={(value) => setIsUserModalOpen(value)}
        modalHeading="Add User Details"
      />
    </div>
  );
};

export default UnderGroupDashboard;
