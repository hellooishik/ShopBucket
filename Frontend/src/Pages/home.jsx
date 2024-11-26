import React from 'react';
import Hero from '../Components/hero';
import LetestCollection from '../Components/LetestCollection';

const Home = () => {  // Make sure the component name is capitalized
  return (
    <div>
      <Hero />
      <LetestCollection/>
    </div>
  );
}

export default Home;
