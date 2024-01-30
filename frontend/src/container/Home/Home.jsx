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
    <div className='Home-container'>
      {/* Use curly braces to embed dynamic content */}
      <p id="first">{firstContent}</p>
      <p id="second">{secondContent}</p>
      <p id="name">{nameContent}</p>
      <p id="third">{thirdContent}</p>
      <p id="fourth">{fourthContent}</p>
    </div>
  );
}

export default Home;
