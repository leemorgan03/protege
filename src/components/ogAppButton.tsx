
import Button from "@mui/material/Button"
import {useState} from 'react';
function AppButton(){
    const [msg, setmsg] = useState<string>("Tesintg the LLM...Tell a Dad Joke!");
    function onButtonClick(){
        console.log("Button Clicked!")
        const url = "http://localhost:11434/api/generate";

            const options = {
              method: 'POST',
              headers: {
                'Content-type': 'application/json'
                    },
              body: JSON.stringify({
                "model": "llama3:8b",
                "prompt": "Summarize this audio transcription and give notes and study reccomendations: I hear you're interested in technology! What area excites you the most? I’m into coding and mobile app development but still figuring out what suits me best. That’s a great start! Since you’re working with Python, you could explore AI or data science, or stick with web development if you enjoy creating user experiences. Use websites like Figma to explore user design. Don’t worry about the math for AI—tools like TensorFlow make it easier. Also, join tech communities and upload your projects to GitHub to build a portfolio. Thanks for the advice! I’ll start using GitHub and keep learning.",
                "stream": false
              }),
                  }
    fetch(url, options)
    .then( (res)=>{
      //this executes if the promise is fulfilled
      console.log(res);
      return (res.json())
    },

    (res2) => {
      //this executes if the promise is rejected
    }
  )
  .then((data) =>{
    //this executes if the json() promise is fulfilled
    console.log(data)
    setmsg(data.response)
  },
  (data)=> {

    //this executes if the json() promise if not fulfilled
  }
    )   
  }

return(<>
    <Button onClick={onButtonClick} variant="contained">Get Notes</Button>
    <p>{msg}</p>
    </>);}

export default AppButton;