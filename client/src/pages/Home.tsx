import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={'/docs'}>
        <h2>docs</h2>
      </Link>
      <Link to={'/Registration'}>
        <h2>Registration</h2>
      </Link>
    </div>
  );
};

export default Home;
