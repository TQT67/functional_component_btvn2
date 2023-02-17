import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setTimeout(() => {
      const date = new Date().toLocaleTimeString();
      setTime(date);
    }, 5000);
    return () => clearTimeout(interval);
  }, []);

  return (
    <div>
      <h1>Giờ hiện tại là: {time}</h1>
    </div>
  );
};

export default App;
