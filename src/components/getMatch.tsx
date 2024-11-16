import { db } from "../firebase/firebaseConfig.ts";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from 'react';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

//import { Mentee, Mentor } from './firebase/interfaces.ts'; // Assuming Mentor interface is defined

interface Mentee {
  id: string;
  Fname: string;
  Lname: string;
  interest: string;
}

interface Mentor {
  id: string;
  first: string;
  last: string;
  expertise: string;
}
const GetMatch = () => {
    const [mentees, setMentees] = useState<Mentee[]>([]);
    const [mentors, setMentors] = useState<Mentor[]>([]);
    const [mentorString, setMentorString] = useState<string>("");
    const [menteeString, setMenteeString] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
          // Fetch mentees
          const menteeRefs = collection(db, "mentee");
          const menteeSnapshot = await getDocs(menteeRefs);
          const menteeData = menteeSnapshot.docs.map((doc) => ({
           
            ...doc.data() as Mentee,
            id: doc.id,
          }));
          setMentees(menteeData);
          console.log(menteeData);
          const menteeString = JSON.stringify(menteeData[0]);
          setMenteeString(menteeString);
          // Fetch mentors
          const mentorRefs = collection(db, "mentor");
          const mentorSnapshot = await getDocs(mentorRefs);
          const mentorData = mentorSnapshot.docs.map((doc) => ({
           
            ...doc.data() as Mentor,
            id: doc.id,
          }));
          setMentors(mentorData);
          console.log(JSON.stringify(mentorData[0]));
          const mentorString = await JSON.stringify(mentorData);
          setMentorString(mentorString);
    
        };
    
        fetchData();
       
      }, []);
      const menteeXmentorString = `${mentorString} + ${menteeString}`;
      //console.log(`Mentor x Mentor conconcatenated string: ${menteeXmentorString}`);
      const mentorMatch = `I have 4 JSON structured objects. Compare object with id = "ment1" to the 3 other objects [id = "p1", id = "p2", id = "p3"]. Specifically, compare the field expertise and interest of id = "ment1" between the job, expertise, and interest fields of the other 3 objects. Consider if they match in industry similarity. Rank the similarity 1-10 of ment1 between p1, p2, and p3. Return names of the 2 highest ranked and score only.: ${menteeXmentorString}`;
      console.log(mentorMatch);

      const [message, setMessage] = useState<string>("Get your Mentor Match!");
      const [open, setOpen] = useState<boolean>(false); // State to manage dialog visibility
      const [responseContent, setResponseContent] = useState<string>(""); // For LLM response
  
    const onButtonClick = async () => {
      console.log("Button Clicked!");
      const url = "http://localhost:11434/api/generate";
  
      // Prepare options to send to Ollama API
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3:8b",
          prompt: {mentorMatch},
          stream: false,
        }),
      };
  
      try {
        // Send request to Ollama API
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`API Error: ${response.statusText}`);
        }
  
        const data = await response.json();
        console.log(data);
        setMessage(data.response || "No response from LLM.");
  
        // Set the response content to display in the dialog box
        setResponseContent(data.response || "No response received.");
  
        // Open the dialog to show the response
        setOpen(true);
  
      } catch (error) {
        console.error("Error:", error);
        setMessage("Error: Unable to fetch response.");
      }
    };
  
    const handleClose = () => {
      setOpen(false); // Close the dialog
    };
  
    return (
      <>
        <Button onClick={onButtonClick} variant="contained">
          Get Notes
        </Button>
        <p>{message}</p>
  
        {/* Dialog Popup for displaying LLM response */}
        <Dialog 
          open={open} 
          onClose={handleClose} // Close dialog when backdrop or close button is clicked
          maxWidth="sm"
          fullWidth
          sx={{ 
            '& .MuiDialog-paper': {
              margin: 'auto',
            },
            '& .MuiDialogBackdrop-root': {
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: add a dimmed backdrop
            }
          }}
        >
          <DialogTitle>Response from LLM</DialogTitle>
          <DialogContent>
            <p>{responseContent}</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
 } 
export default GetMatch;