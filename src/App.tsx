//import react
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenteeLogin from './pages/MenteeLogin';
import MentorLogin from './pages/MentorLogin';
import CreateAccount from './pages/CreateAccount';
import MenteeDash from './pages/MenteeDash';
import MentorDash from './pages/MentorDash';
import AcceptDecline from './pages/AcceptDecline';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MenteeLogin" element={<MenteeLogin />} />
        <Route path="/MentorLogin" element={<MentorLogin />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/MenteeDash" element={<MenteeDash />} />
        <Route path="/MentorDash" element={<MentorDash />} />
        <Route path="/AcceptDecline" element={<AcceptDecline />} />
        <Route path="/" element={<MentorDash />} />
        <Route path="/AcceptDecline" element={<AcceptDecline />} />
        <Route path="/" element={<MenteeLogin />} />
        <Route path="/MenteeDash" element={<MenteeDash />} />
        <Route path="/" element={<MentorLogin />} />
        <Route path="/MentorDash" element={<MentorDash />} />
      </Routes>
    </Router>

  );
  
};

export default App;