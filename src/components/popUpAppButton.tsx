import Button from "@mui/material/Button";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

function AppButton() {
  const [message, setMessage] = useState<string>("Testing the LLM... Tell a Dad Joke!");
  const [open, setOpen] = useState<boolean>(false);  // State to manage dialog visibility
  const [promptContent, setPromptContent] = useState<string>("");

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
        prompt: "Summarize this audio transcription and give notes and study recommendations: I hear you're interested in technology! What area excites you the most? I’m into coding and mobile app development but still figuring out what suits me best. That’s a great start! Since you’re working with Python, you could explore AI or data science, or stick with web development if you enjoy creating user experiences. Use websites like Figma to explore user design. Don’t worry about the math for AI—tools like TensorFlow make it easier. Also, join tech communities and upload your projects to GitHub to build a portfolio. Thanks for the advice! I’ll start using GitHub and keep learning.",
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
      
      // Set the prompt content to show in the dialog box
      setPromptContent("Summarize this audio transcription and give notes and study recommendations: I hear you're interested in technology! What area excites you the most?");

      // Open the dialog to show the prompt content
      setOpen(true);

    } catch (error) {
      console.error("Error:", error);
      setMessage("Error: Unable to fetch response.");
    }
  };

  const handleClose = () => {
    setOpen(false); // Close the dialog when clicking outside or on close button
  };

  return (
    <>
      <Button onClick={onButtonClick} variant="contained">
        Get Notes
      </Button>
      <p>{message}</p>

      {/* Dialog Popup for displaying prompt content */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Prompt Content</DialogTitle>
        <DialogContent>
          <p>{promptContent}</p>
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

export default AppButton;
