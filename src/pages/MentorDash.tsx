//import React from "react";
import MatchComponent from '../components/MatchComponent'
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddIcon from "@mui/icons-material/Add";

const MentorDash = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#E8F4FF",
        minHeight: "100vh",
        padding: 4,
        position: "relative",
      }}
    >
      {/* Settings Icon */}
      <IconButton
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
        }}
      >
        <SettingsIcon />
      </IconButton>

      {/* Header Section */}
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: "600px",
          p: 3,
          mb: 4,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          bgcolor: "#0066FF",
          color: "#fff",
          borderRadius: 3,
        }}
      >
        <Avatar
          src="/mentor.png"
          alt="Mentor Avatar"
          sx={{
            width: 80,
            height: 80,
            mr: 3,
          }}
        />
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            Hi, Kennedy!
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Your Guidance Shapes Futures.
          </Typography>
          <MatchComponent></MatchComponent>
        </Box>
      </Paper>

      {/* Mentee List */}
      <Typography
        variant="h6"
        sx={{
          width: "100%",
          maxWidth: "600px",
          fontWeight: "bold",
          mb: 2,
        }}
      >
        Mentee List
      </Typography>
      {[
        { name: "Morgan Lee", role: "Aspiring Data Analyst" },
        { name: "Jaida Plair", role: "Aspiring Consultant" },
        { name: "Antonio Moretti", role: "Aspiring Developer" },
      ].map((mentee, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            width: "100%",
            maxWidth: "600px",
            p: 2,
            mb: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: "#FFFFFF",
            borderRadius: 3,
          }}
        >
          <Box>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#000" }}
            >
              {mentee.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "#555" }}>
              {mentee.role}
            </Typography>
          </Box>
          <IconButton>
            <GroupIcon sx={{ color: "#6B6B6B" }} />
          </IconButton>
        </Paper>
      ))}

      {/* Action Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "600px",
          mb: 4,
        }}
      >
        <Button
          variant="outlined"
          startIcon={<GroupIcon />}
          sx={{
            bgcolor: "#FFF",
            color: "#0066FF",
            flex: 1,
            marginRight: 1,
            borderRadius: "16px",
            textTransform: "none",
            "&:hover": { bgcolor: "#F0F8FF" },
          }}
          onClick={() => navigate("/AcceptDecline")} // Navigate to AcceptDecline page
        >
          2 Pending Requests
        </Button>
        <Button
          variant="outlined"
          startIcon={<CalendarTodayIcon />}
          sx={{
            bgcolor: "#FFF",
            color: "#0066FF",
            flex: 1,
            marginLeft: 1,
            borderRadius: "16px",
            textTransform: "none",
            "&:hover": { bgcolor: "#F0F8FF" },
          }}
        >
          Upcoming
        </Button>
      </Box>

      {/* New Group Event Button */}
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{
          bgcolor: "#0066FF",
          color: "#fff",
          borderRadius: "24px",
          paddingX: 4,
          textTransform: "none",
          fontSize: "16px",
        }}
      >
        + New Group Event
      </Button>
    </Box>
  );
};

export default MentorDash;