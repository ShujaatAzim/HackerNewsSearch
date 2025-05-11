import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Menu secondary>
      <Menu.Item onClick={() => navigate("/")} disabled={location.pathname === "/"}>Home</Menu.Item>
      <Menu.Item onClick={() => navigate("/search")} disabled={location.pathname === "/search"}>Search</Menu.Item>
      <Menu.Item onClick={() => navigate("/history")} disabled={location.pathname === "/history"}>History</Menu.Item>
      {/* <Menu.Menu position='right'>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
      </Menu.Menu> */}
    </Menu>
  );
}

export default Navbar;
