"use client";

import { useState } from "react";

export default function Home() {
  const [inputVal, setInputval] = useState("");

  const handleSubmit = () => {

  }
  return ( 
    <div>
      <div>
        <h1>Enter Your Name</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Type your name..." 
          value={inputVal}
          onChange={(e) => setInputval(e.target.value)}
        />
        <button type="submit">Predict Data</button>
      </form>
    </div>
  );
}
