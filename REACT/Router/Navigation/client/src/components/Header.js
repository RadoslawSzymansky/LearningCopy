import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div>
        <h1>Header</h1>
        <div className="menu">
          <Link to="/">Streamy</Link>
          <Link to="/">All streams</Link>
          <Link to="/">Streamy</Link>
          <GoogleAuth/>
        </div>
    </div>
  );
};

export default Header;