import { useState, useEffect } from 'react';

const TextComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const texts = ["Design Services", "Development Services", "E-Comerce Services"];

  return (
    <div id='animation'>
      {texts.map((text, index) => (
        <div
        className='text-xl text-[#0074FF]'
          key={index}
          style={{
            display: index === currentIndex ? 'block' : 'none',
            // Add other styling as per your requirements
          }}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default TextComponent;