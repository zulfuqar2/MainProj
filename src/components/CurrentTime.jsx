import React, { useEffect, useState } from "react";

const API_KEY = "2aff2ce987004ee6be6fe1aacea5e0a3";
const location = "Asia/Baku";

const CurrentTime = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const link = `https://api.ipgeolocation.io/timezone?apiKey=${API_KEY}&tz=${location}`;

    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log("Hata:", error);
        setError(error);
      });
  }, []);//dependence array 

  if (error) {
    return <div>Hata: {error.message}</div>;
  }

  if (!data) {
    return <div>Veriler yükleniyor...</div>;
  }

  return (
    <div>
      <p>Local Date : {data.date}</p>
      <p>Local time : {data.time_24}</p>
    </div>
  );
};

export default CurrentTime;

//  const APIKEY ='2aff2ce987004ee6be6fe1aacea5e0a3';
// `const link = 'https://api.ipgeolocation.io/timezone?apiKey=API_KEY&tz=America/Los_Angeles'`
