import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Home Page</h1>
      <Link to={'/docs'}>
        <h2>docs</h2>
      </Link>
      <Link to={'/registration'}>
        <h2>Registration</h2>
      </Link>

      <Link to={'/authentification'}>
        <h2>Log in</h2>
      </Link>
    </div>
  );
};

export default Home;
