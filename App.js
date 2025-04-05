import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState,useEffect} from "react"

const ProgressBar = ({ progress }) => {
    const [animation, setAnimation] = useState(0);
  
    useEffect(() => {
      setTimeout(() => setAnimation(progress), 500);
    }, [progress]);
  
    return (
      <div className="progress-outer">
        <div
          className="progress-inner"
          style={{
            // width: `${e}%`,
            transform: `translateX(${animation - 100}%)`,
            color: animation < 8 ? "black" : "white",
            backgroundColor : animation < 30 ? "violet" : "coral"
          }}
        >
          {animation}%
        </div>
      </div>
    );
  };

const App = () => {
    const bars = [0, 3, 6, 10, 19, 45, 73, 89, 100];

    return (
      <div className="App">
        <h3>Progress Bar</h3>
        {bars.map((e) => {
          return <ProgressBar progress={e} />;
        })}
      </div>
    );
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);