import React from 'react';
import { connect } from 'react-redux';
import Current from '../src/components/Current';
import WeApp from '../src/components/WeApp'
const App = ({ location }) => {
  return (
    <div>
      {location && (
        <div>
          Location at now: {location.latitude}, {location.longitude}
        </div>
      )}
      <Current />
      <WeApp/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  location: state.location
});

export default connect(mapStateToProps)(App);



// import React from 'react'
// import WeApp from './components/WeApp'
// import Current from './components/Current'

// function App() {
//   return (
//     <>

//     <WeApp/>
//     <Current/>
//     </>
//   )
// }

// export default App