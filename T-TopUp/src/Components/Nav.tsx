import React from 'react';

const Nav: React.FC = () => {
  return (
    <>
      <nav id="nav1" style={{ backgroundColor: '#021024', textAlign: 'right' }}>
        <a href="#" style={{ padding: '20px', color: 'white' }}>Log in</a>
      </nav>
      
      <nav id="nav2" style={{ backgroundColor: '#5483B3', margin: '0px', overflow: 'hidden', display: 'flex', flexDirection: 'row', textAlign: 'center' }}>
        <a href="#">
          <img src="image.png" alt="Logo" className="logosize" style={{ width: '50px' }} />
        </a>
        <a href="#" style={{ color: 'white', display: 'block', float: 'left', padding: '14px 16px', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ color: 'white', display: 'block', float: 'left', padding: '14px 16px', textDecoration: 'none' }}>Games</a>
        <a href="#" style={{ color: 'white', display: 'block', float: 'left', padding: '14px 16px', textDecoration: 'none' }}>User Management</a>
        <a href="#" style={{ color: 'white', display: 'block', float: 'left', padding: '14px 16px', textDecoration: 'none' }}>Product Management</a>
      </nav>
    </>
  );
}

export default Nav;
