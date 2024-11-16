// Sample JSON data
const mentors = [
    {
      id: "p1",
      mentor: true,
      name: "Mary",
      job: "Software Engineering",
      gender: "female",
      city: "Atlanta",
      state: "Georgia",
      expertise: ["Java", "VIM", "Python"]
    },
    {
      id: "p2",
      mentor: true,
      name: "Jasmine Sullivan",
      job: "Consultant",
      gender: "female",
      city: "Atlanta",
      state: "Georgia",
      expertise: ["Data Analytics", "Python", "Machine Learning"]
    },
    {
      id: "p3",
      mentor: true,
      name: "Kobe Lawson",
      job: "Business Analyst",
      gender: "male",
      city: "Dallas",
      state: "Texas",
      expertise: ["Management", "Sales", "Consulting"]
    }
  ];
  
  const mentee = {
    id: "m2",
    mentor: false,
    name: "Darla Richards",
    school: "Spelman College",
    gender: "female",
    city: "Atlanta",
    state: "Georgia",
    interest: ["Technology", "Consulting", "Management"]
  };
  
  // Manually pair the mentee with mentors
  const menteeWithMentors = {
    mentee: mentee,
    mentors: mentors
  };
  
  // Convert to JSON string
  const jsonString = JSON.stringify(menteeWithMentors, null, 2);
  
  // Example of concatenating with another string
  const concatenatedString = ` Please look at these 4 database entries below. Compare the interest field with the several expertise field and consider if they match in industry similarity. Tell me if they are smilar. Give a score 1-10 based on similarity.
: \n${jsonString}`;
  
  // Output to the console
  console.log(concatenatedString);
  
  // Example of storing the string for future use
  const finalOutput = concatenatedString;
  