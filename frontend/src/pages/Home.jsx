import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1>Welcome to WhealDeal</h1>
      <p>Your one-stop solution to Buy, Sell or Upgrade your vehicle!</p>
      <nav>
        <Link to="/buy"><button>Buy a Vehicle</button></Link>
        <Link to="/sell"><button>Sell Your Vehicle</button></Link>
        <Link to="/estimate"><button>Get Price Estimate</button></Link>
        <Link to="/test-drive"><button>Book a Test Drive</button></Link>
        <Link to="/admin"><button>Admin Panel</button></Link>
      </nav>
    </div>
  );
}

export default Home;