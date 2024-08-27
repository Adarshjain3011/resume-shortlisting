import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Linkedin from './auth/linkedin/callback';

import Home from './component/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Add a component for the root path if needed */}
        <Route path="/auth/linkedin/callback" element={<Linkedin />} />
      </Routes>
    </div>
  );
}

export default App;

