import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: '500px' }}>
      <h3>Welcome to Hacker News Search!</h3>
      <h5>By Shujaat Azim</h5>
      <p>Here you can search for articles on Hacker News. Simply click search and type in some terms; 
        your history will be preserved in the History tab (until page reload).
      </p>
      <p>
        This small, no-frills project was built in a half hour for a coding interview. I've made some small improvements
        since then, but wanted to preserve the minimalistic look and feel. Enjoy!
      </p>
      <div>
        <Button color="primary" onClick={() => navigate("/search")}>Search</Button>
        <Button color="primary" onClick={() => navigate("/history")}>History</Button>
      </div>
    </div>
  );
}

export default HomePage;