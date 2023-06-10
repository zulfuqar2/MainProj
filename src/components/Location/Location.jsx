import React from 'react';

function CurrentTime() {
  function timeCr() {
    const APIKEY = '873dbe322aea47f89dcf729dcc8f60e8';

    fetch('https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation', {
      headers: {
        'X-RapidAPI-Key': APIKEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      {/* <p>{data.country}</p> */}
      
    </div>
  );
}

export default CurrentTime;