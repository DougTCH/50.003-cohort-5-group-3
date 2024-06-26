import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import viteLogo from '/vite.svg';
import bankLogo from './assets/Banklogo.svg'

function Header() {
  return (
    <header>
      <div className="Heading">
        <img className="logo" src={bankLogo} alt="Fetch Banking Logo" />
        
        <div className="Header_Buttons">
          <button onClick={() => alert("PROFILE")} className="Profile">Profile</button>
          <button className="Logout">Logout</button>
        </div>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/accounts">My Accounts</Link>
        <Link to="/transfer">Transfer</Link>
        <Link to="/pay">Pay</Link>
        <Link to="/cards">Cards</Link>
        <Link to="/apply">Apply</Link>
        <Link to="/loyaltypoints">Loyalty Points<sup>NEW!</sup></Link>
      </nav>
    </header>
  );
}

export default Header;
