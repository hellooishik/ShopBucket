// Ensure you're exporting the component correctly
import React from 'react';
import Hero from '../Components/hero';
import LetestCollection from '../Components/LetestCollection';
import BestSeller from '../Components/BestSeller';
import OurPolicy from '../Components/OurPolicy';

const Home = () => {
  return (
    <div>
      <Hero />
      <LetestCollection />
      <BestSeller />
      <OurPolicy/>
    </div>
  );
}

export default Home;
