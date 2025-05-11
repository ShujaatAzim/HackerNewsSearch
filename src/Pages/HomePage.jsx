import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h3>Welcome to Hacker News Search!</h3>
      <h5>By Shujaat Azim</h5>
      <div>
        <Button color="primary" onClick={() => navigate("/search")}>Search</Button>
        <Button color="primary" onClick={() => navigate("/history")}>History</Button>
      </div>
    </div>
  );
}

export default HomePage;