//import React from 'react';
import { Box, Button, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        bgcolor: '#f5f5f5',
      }}
    >
      <Avatar src = '/protege.png' sx = {{width:'250px' , height:'250px'}} > </Avatar>
      
      <Button variant="outlined" sx={{ mb: 2 }} onClick={() => navigate('/create-account')}>
        Create an Account
      </Button>
      <Button variant="outlined" sx={{ mb: 2 }} onClick={() => navigate('/mentee-login')}>
        Mentee Login
      </Button>
      <Button variant="outlined" onClick={() => navigate('/mentor-login')}>
        Mentor Login
      </Button>
    </Box>
  );
};

export default HomePage;