import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";

const App = () => {
  const [city, setCity] = useState("");
  const [desc, setDesc] = useState({
    description: "",
    city: "",
    country: "",
    temperature: 0,
    minTemp: 0,
    maxTemp: 0,
    humidity: 0,
    sunrise: 0,
    sunset: 0,
  });
  const [showData, setShowData] = useState(false);

  handleClick = async () => {

    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4daf41d9a2424871c447ed9541154bfc`
          );
          const json = await res.json();
          setDesc({
            description: json?.weather?.[0]?.description ?? '',
            city: json?.name,
            country: json?.sys?.country,
            temperature: json?.main?.temp,
            minTemp: json?.main?.temp_min,
            maxTemp: json?.main?.temp_max,
            humidity: json?.main?.humidity,
            sunrise: json?.sys?.sunrise,
            sunset: json?.sys?.sunset,
          });
          setShowData(true);
          console.log(json, "cityy");
    }
    catch(err) {
        console.log(err)
    }
   
  };

  return (
    <div className="App">
      <h3>Current Weather</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="weather">
          <input
            style={{ padding: "6px", marginRight: "3px" }}
            onChange={(e) => setCity(e?.target?.value)}
            value={city}
            type={"text"}
          />
          <button
            onClick={handleClick}
            style={{ padding: "8px", border: "none", backgroundColor: "pink" }}
          >
            Search
          </button>
        </div>

        <div>
          {showData && (
            <div
              style={{
                border: "2px solid black",
                margin: "15px",
                width: "500px",
                height: "400px",
              }}
            >
              <h3>
                {desc.city}, {desc.country}
              </h3>
              <label
                style={{
                  border: "none",
                  padding: "8px",
                  backgroundColor: "lightgreen",
                }}
              >
                {desc.description}
              </label>
              <div style={{ marginTop: "12px" }}>
                Temperature {desc?.temperature}
              </div>
              <div style={{ marginTop: "12px" }}>
                Minimum Temperature {desc?.minTemp}
              </div>
              <div style={{ marginTop: "12px" }}>
                Maximum Temperature {desc?.maxTemp}
              </div>
              <div style={{ marginTop: "12px" }}>Humidity {desc?.humidity}</div>
              <div style={{ marginTop: "12px" }}>Sunrise {desc?.sunrise}</div>
              <div style={{ marginTop: "12px" }}>Sunset {desc?.sunset}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
