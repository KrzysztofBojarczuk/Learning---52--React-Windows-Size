import { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';
import useWindowSize from './components/useWindowSize';


function App() {
 
  const [w,h] = useWindowSize();
  return (
    <div>
     {w} x {h}
    </div>
  );
}

export default App;
