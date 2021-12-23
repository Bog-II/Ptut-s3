import React from 'react';
import { Link } from 'react-router-dom';
import HomeConnected from './HomeConnected'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={'/docs'}>
        <h2>docs</h2>
      </Link>
      <HomeConnected />
    </div>
  );
};

export default Home;
