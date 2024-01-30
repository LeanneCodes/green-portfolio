import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  // State to manage the content of the first paragraph
  const [firstContent, setFirstContent] = useState('');
  const [secondContent, setSecondContent] = useState('');
  const [nameContent, setNameContent] = useState('');
  const [thirdContent, setThirdContent] = useState('');
  const [fourthContent, setFourthContent] = useState('');

  // useEffect to update the content when the component mounts
  useEffect(() => {
    setFirstContent('frontend react nodejs vscode');
    setSecondContent('api tailwind developer github');
    setNameContent('leanne goldsmith');
    setThirdContent('npm figma bootstrap css nextjs');
    setFourthContent('html photoshop javascript jquery');
  }, []);

  return (
    <div className='Home-container h-full flex flex-col justify-center items-center overflow-hidden'>
      <p id="first" className='text-green font-header home-text'>{firstContent}</p>
      <p id="second" className='text-green font-header home-text'>{secondContent}</p>
      <p id="name" className='text-mint font-header home-text'>{nameContent}</p>
      <p id="third" className='text-green font-header home-text'>{thirdContent}</p>
      <p id="fourth" className='text-green font-header home-text'>{fourthContent}</p>
    </div>
  );
}

export default Home;
