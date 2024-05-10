import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import SignUp from './SignUp';
import Nutrition from './Nutrition';
import Account from './Account';
import Metronome from './Metronome';
import AboutMe from './AboutMe';
import Login from './Login';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/account" element={<Account />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/metronome" element={<Metronome />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
