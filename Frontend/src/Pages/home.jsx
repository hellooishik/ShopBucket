
import React from 'react';
import Hero from '../Components/hero';
import LetestCollection from '../Components/LetestCollection';
import BestSeller from '../Components/BestSeller';
import OurPolicy from '../Components/OurPolicy';
import NewsLetterBox from '../Components/NewsLetterBox';

const Home = () => {
  return (
    <div>
      <Hero />
      <LetestCollection />    
      <BestSeller />
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  );
}

export default Home;
