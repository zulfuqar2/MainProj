import React, { useEffect, useState } from 'react';
import './Say.css'
const SayHi = () => {
  const [showMessage, setShowMessage] = useState(false);
useEffect(() => {
    setShowMessage(true);
  }, []);
return (
    <div className="greetings-container">
      {showMessage && (
        <h1 className="greetings-message">
          Welcome  to my Wheather App 
        </h1>
      )}
    </div>
  );
};
export default SayHi;
