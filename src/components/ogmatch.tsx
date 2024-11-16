import { db } from "../firebase/firebaseConfig.ts";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { Typography, Box } from "@mui/material";
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

export default function match() {
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
  const prompt = `I have 4 JSON structured objects. Compare object with id = "ment1" to the 3 other objects [id = "p1", id = "p2", id = "p3"]. Specifically, compare the field expertise and interest of id = "ment1" between the job, expertise, and interest fields of the other 3 objects. Consider if they match in industry similarity. Rank the similarity 1-10 of ment1 between p1, p2, and p3. Return names of the 2 highest ranked and score only.: ${menteeXmentorString}`;
  console.log(prompt);

  return (
    <Box>
      {/* Render mentees */}
      {mentees.map((mentee) => (
        <Typography key={mentee.id} variant="h1">
          {mentee.Fname} - {mentee.Lname}
        </Typography>
      ))}

      {/* Render mentors */}
      {mentors.map((mentor) => (
        <Typography key={mentor.id} variant="h1">
          {mentor.first} - {mentor.expertise}
        </Typography>
      ))}
    </Box>
  );
}