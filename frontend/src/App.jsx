import { useState } from 'react'
import './App.css';

import {Route,Routes} from "react-router-dom";

import Linkedin from './auth/linkedin/callback';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <div>

            hellow sir 

        </div>

        <Routes>

            <Route element={<Linkedin></Linkedin>} path='/auth/linkedin/callback'></Route>

        </Routes>
    </>
  )
}s

export default App
