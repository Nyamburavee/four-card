import React from 'react';

const Card = ({ title, text, image, borderColor, borderRadius }) => {
  return (
    <div className={`border-t-4 p-5 h-60 w-72 relative bg-white shadow-lg ${borderColor} ${borderRadius}`}>
      <h2 className="text-veryDarkBlue font-extrabold text-lg">{title}</h2>
      <p className="text-grayishBlue">{text}</p>
      <img src={image} alt={title} className="image absolute h-14 mb-6 right-4 bottom-2"/>
    </div>
  );
};

export default Card;