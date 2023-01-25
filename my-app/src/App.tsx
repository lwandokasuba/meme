import React from 'react';
import './App.css';

import { Nav } from './components';

function App() {
  return (
    <div className={`flex flex-col items-center`}>
      {/* Navigation */}
      <div className='flex'>
        <Nav />
      </div>

      {/* Other sections */}
      <div className=''>

      </div>

    </div>
  );
}

export default App;
