//import React from 'react';

import { Box, Typography, Paper, Button, Avatar } from "@mui/material";

const profiles = [
  {
    id: 1,
    name: "Jeremy Kearse",
    bio: "Aspiring Data Scientist with a passion for machine learning and AI.",
    avatar: "/newMentee.png", 
  },
  {
    id: 2,
    name: "Tomias Davis",
    bio: "Creative consultant who loves helping others reach their potential.",
    avatar: "/newMentee2.png", 
  },
];

const AcceptDecline = () => {
  const handleAccept = (id: number) => {
    alert(`Accepted profile with ID: ${id}`);
  };

  const handleDecline = (id: number) => {
    alert(`Declined profile with ID: ${id}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#E8F4FF", // Light blue background
        minHeight: "100vh",
        padding: 4,
        gap: 3,
      }}
    >
      {profiles.map((profile) => (
        <Paper
          key={profile.id}
          elevation={3}
          sx={{
            width: "100%",
            maxWidth: "600px",
            p: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: "#FFFFFF", // White background
            borderRadius: 3,
            gap: 2,
          }}
        >
          <Avatar
            src={profile.avatar}
            alt={profile.name}
            sx={{ width: 80, height: 80 }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {profile.name}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "#555" }}>
              {profile.bio}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Button
              variant="contained"
              color="success"
              sx={{ textTransform: "none" }}
              onClick={() => handleAccept(profile.id)}
            >
              Accept
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ textTransform: "none" }}
              onClick={() => handleDecline(profile.id)}
            >
              Decline
            </Button>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default AcceptDecline;