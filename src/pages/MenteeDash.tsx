//import React from "react";
import AppButton from '../components/AppButton'
import {
  Box,
  Typography,
  Paper,
  Button,
  Avatar,

} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddIcon from "@mui/icons-material/Add";
import GroupIcon from "@mui/icons-material/Group";

const MenteeDash = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#E8F4FF", 
        minHeight: "100vh",
        padding: 4,
      }}
    >
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
          position: "relative",
        }}
      >
        <Avatar
          src="/mentee.png"
          alt="Mentee Avatar"
          sx={{
            width: 80,
            height: 80,
            mr: 3,
          }}
        />
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            Hi, Jasmine!
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Ready to Grow Today?
          </Typography>
          <Typography variant="body2">2/5 Goals Achieved</Typography>
        </Box>
      </Paper>

      {/* Action Cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "600px",
          mb: 4,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "48%",
            padding: 2,
            bgcolor: "#1A1A1A",
            color: "#fff",
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PersonIcon sx={{ fontSize: 40, mb: 1 }} />
          <Typography>Schedule</Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            width: "48%",
            padding: 2,
            bgcolor: "#1A1A1A",
            color: "#fff",
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CalendarTodayIcon sx={{ fontSize: 40, mb: 1 }} />
          <Typography>Upcoming Sessions</Typography>
        </Paper>
      </Box>

      {/* Mentor Section */}
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: "600px",
          p: 2,
          mb: 4,
          bgcolor: "#1A1A1A",
          color: "#fff",
          borderRadius: 3,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Avatar
          src="/theMentor.png"
          alt="Mentor Avatar"
          sx={{
            width: 60,
            height: 60,
            mr: 3,
          }}
        />
        <Box>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Mentor: Andrea Lawrence
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 1,
              bgcolor: "#0066FF",
              color: "#fff",
              textTransform: "none",
              borderRadius: 20,
            }}
          >
            View Profile
          </Button>
        </Box>
      </Paper>

      {/* Bottom Buttons */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 2,
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            flex: "1 1 48%",
            p: 2,
            bgcolor: "#1A1A1A",
            color: "#fff",
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AddIcon sx={{ fontSize: 40, mb: 1 }} />
          <Typography>New Goal</Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            flex: "1 1 48%",
            p: 2,
            bgcolor: "#E8F4FF",
            color: "#0066FF",
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AppButton></AppButton>
          {/* <Button variant="contained" sx={{ mb: 2 }}> 
          Previous Meeting Notes
          </Button> */}
        </Paper>
        <Paper
          elevation={3}
          sx={{
            flex: "1 1 48%",
            p: 2,
            bgcolor: "#1A1A1A",
            color: "#fff",
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <GroupIcon sx={{ fontSize: 40, mb: 1 }} />
          <Typography>Explore Group Sessions</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default MenteeDash;

// import AppButton from '../components/AppButton'
// import MatchComponent from '../components/MatchComponent.tsx'

// const MenteeDash = () => {
//     return (
//         <>
//           <h1>Mentee Dashboard</h1>
//           <p>Welcome to the Mentee Dashboard.</p>
//           <AppButton></AppButton>
//           <div></div>
//           <p>See your Mentor Match!</p>
//           <MatchComponent></MatchComponent>
//         </>
//     );
// }
// export default MenteeDash;