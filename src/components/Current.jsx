// import React, { useEffect, useState } from 'react';

// const Current = () => {
//   const [currentLocation, setCurrentLocation] = useState(null);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation({ latitude, longitude });
//       },
//       (error) => {
//         console.error('Location dont find', error);
//       }
//     );
//   }, []);

//   if (!currentLocation) {
//     return <div>Wait Location adress...</div>;
//   }

//   return (
//     <div>
//       Location: {currentLocation.latitude}, {currentLocation.longitude}
//     </div>
//   );
// };

// export default Current;
