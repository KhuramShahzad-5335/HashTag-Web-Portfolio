/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TestComponent() {
  const [progress, setProgress] = useState(0); // Set initial progress to 0
  const [startX, setStartX] = useState(0);
  const [active, setActive] = useState(0);
  const [isDown, setIsDown] = useState(false);

  const speedWheel = 0.03;
  const speedDrag = -0.08;

  const getZindex = (array, index) => array.map((_, i) => (index === i ? array.length : array.length - Math.abs(index - i)));

  const $itemsRef = React.useRef([]);
  const $cursorsRef = React.useRef([]);

  useEffect(() => {
    const $items = $itemsRef.current;
    const $cursors = $cursorsRef.current;

    const displayItems = (item, index, active) => {
      const zIndex = getZindex([...$items], active)[index];
      item.style.setProperty('--zIndex', zIndex);
      item.style.setProperty('--active', (index - active) / $items.length);
    };

    const animate = () => {
      const clampedProgress = Math.max(0, Math.min(progress, 100));
      const activeIndex = Math.floor((clampedProgress / 100) * ($items.length - 1));
      setActive(activeIndex);
      $items.forEach((item, index) => displayItems(item, index, activeIndex));
    };

    animate();

    const handleWheel = (e) => {
      const wheelProgress = e.deltaY * speedWheel;
      setProgress((prevProgress) => prevProgress + wheelProgress);
    };

    const handleMouseMove = (e) => {
      if (e.type === 'mousemove') {
        $cursors.forEach(($cursor) => {
          $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
      }
      if (!isDown) return;
      const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const mouseProgress = (x - startX) * speedDrag;
      setProgress((prevProgress) => prevProgress + mouseProgress);
      setStartX(x);
    };

    const handleMouseDown = (e) => {
      setIsDown(true);
      const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      setStartX(x);
    };

    const handleMouseUp = () => {
      setIsDown(false);
    };

    document.addEventListener('wheel', handleWheel);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchstart', handleMouseDown);
    document.addEventListener('touchmove', handleMouseMove);
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchstart', handleMouseDown);
      document.removeEventListener('touchmove', handleMouseMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [progress, isDown, startX, speedDrag]);

  let carousleData = [
    {
      no: 1,
      title: "YakkaFX",
      link: "/Yakka"
    },
    {
      no: 2,
      title: "Scintillate",
      link: "/scintillate"
    },
    {
      no: 3,
      title: "Lottrips",
      link: "/lottrips"
    },
  ]

  return (
    <>
    <div className="carousel">
    <h3 className='text-5xl font-semibold text-center text-blue-600 mt-12 '>Recent Projects</h3>
      {carousleData.map((item, index) => (
        <div
          key={index}
          className="carousel-item "
          ref={(el) => ($itemsRef.current[index] = el)}
          onClick={() => {
            setProgress((index / 2) * 100);
          }}
        >
          <div className="carousel-box">
            <div className="title">{item.title}</div>
            {/* <div className="num">{item.no}</div> */}
            <img src={`recentProject${index + 1}.webp`} alt={`Image ${index + 1}`} />
          </div>
        </div>
      ))}
      <div className="cursor" ref={(el) => ($cursorsRef.current[0] = el)}></div>
    </div>
  </>
  );
}

export default TestComponent;
