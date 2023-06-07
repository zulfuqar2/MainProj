import React, { useEffect, useState } from 'react';

function CurrentTime() {
  const [countryName, setCountryName] = useState('');
  const [stateProv, setStateProv] = useState('');
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    fetch("https://api.db-ip.com/v2/free/self")
      .then(response => response.json())
      .then(data => {
        setCountryName(data.countryName);
        setStateProv(data.stateProv);
        setIpAddress(data.ipAddress);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        <p>Country: {countryName}</p>
        <p>State/Province: {stateProv}</p>
        <p>IP Address: {ipAddress}</p>
      </div>
    </>
  )
}

export default CurrentTime;

