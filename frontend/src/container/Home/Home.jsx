import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { navigate } from 'navigate';
import './Home.css';

gsap.registerPlugin(CSSPlugin);

const Home = () => {
  const [firstContent, setFirstContent] = useState('');
  const [secondContent, setSecondContent] = useState('');
  const [nameContent, setNameContent] = useState('');
  const [thirdContent, setThirdContent] = useState('');
  const [fourthContent, setFourthContent] = useState('');

  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);

  useEffect(() => {
    setFirstContent('frontend react nodejs vscode');
    setSecondContent('api tailwind developer github');
    setNameContent('leanne goldsmith');
    setThirdContent('npm figma bootstrap css nextjs');
    setFourthContent('html photoshop javascript jquery');

    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

    // Animations using GSAP
    tl.fromTo(firstRef.current, { x: 0, opacity: 1 }, { x: 150, opacity: 0, duration: 5 });
    tl.fromTo(secondRef.current, { x: 0, opacity: 1 }, { x: -150, opacity: 0, duration: 5 }, "-=5");
    tl.fromTo(thirdRef.current, { x: 0, opacity: 1 }, { x: 150, opacity: 0, duration: 5 }, "-=5");
    tl.fromTo(fourthRef.current, { x: 0, opacity: 1 }, { x: -150, opacity: 0, duration: 5 }, "-=5");

    tl.eventCallback('onComplete', () => {
        navigate('/about');
    });

  }, []);

  return (
    <div className='Home-container h-full flex flex-col justify-center items-center overflow-hidden'>
      <p ref={firstRef} id="first" className='text-green font-header home-text move-left'>{firstContent}</p>
      <p ref={secondRef} id="second" className='text-green font-header home-text move-right'>{secondContent}</p>
      <p id="name" className='text-mint font-header home-text'>{nameContent}</p>
      <p ref={thirdRef} id="third" className='text-green font-header home-text move-left'>{thirdContent}</p>
      <p ref={fourthRef} id="fourth" className='text-green font-header home-text move-right'>{fourthContent}</p>
    </div>
  );
}

export default Home;
