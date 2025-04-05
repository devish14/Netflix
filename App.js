import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState,useEffect } from 'react';

const App = () => {
    const [data, setData] = useState("");
    const [result, setResult] = useState([]);
    const [focus, setFocus] = useState(false);
    const [cache, setCache] = useState({});
  
    const fetchData = async () => {
      if (cache[data]) {
        console.log("Cache is called");
        setResult(cache[data]);
        return;
      }
  
      console.log("API is called");
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${data}`
      );
      const json = await response.json();
      setResult(json?.recipes);
      setCache((prev) => ({ ...prev, [data]: json?.recipes }));
      console.log(cache[data]);
    };
  
    useEffect(() => {
      const timer = setTimeout(fetchData, 500);
  
      return () => {
        clearTimeout(timer);
      };
    }, [data]);
  
    return (
      <div className="App">
        <h3>Auto Complete Search Box</h3>
        <input
          className="input-text"
          type={"text"}
          value={data}
          onChange={(e) => setData(e?.target?.value)}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
        />
        {focus && (
          <div className="result-container">
            {result.map((e) => {
              return (
                <span key={e.id} className="result">
                  {e.name}
                </span>
              );
            })}
          </div>
        )}
      </div>
    );
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);