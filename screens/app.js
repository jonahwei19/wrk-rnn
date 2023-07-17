import React, { useState } from 'react';
import LandingPage from './screens/LandingPage';
import MatchesPage from './screens/MatchesPage';
import ProfilePage from './screens/ProfilePage';
import LoginPage from './screens/LoginPage';
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <div className="column">
        {/* Your existing code for the first column */}
        <LandingPage />
      </div>
      <div className="column">
        {/* Your existing code for the second column */}
        <MatchesPage />
      </div>
      <div className="column">
        {/* Your existing code for the third column */}
        <ProfilePage />
      </div>
      <div className="column">
        {/* Implement the fifth column */}
        {loggedIn ? (
          <form>
            {/* Render your Formidable form here */}
          </form>
        ) : (
          <LoginPage setLoggedIn={setLoggedIn} />
        )}
      </div>
      <div className="column">
        {/* Your existing code for the fourth column */}
      </div>
    </div>
  );
};

export default App;
