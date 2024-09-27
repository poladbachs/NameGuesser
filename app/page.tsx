"use client";

import { useState } from "react";

export default function Home() {
  const [inputVal, setInputval] = useState("");
  return ( 
    <div>
      <div>
        <h1>Enter Your Name</h1>
      </div>
      <form>
        <input type="text" placeholder="Type your name..."/>
        <button type="submit">Predict Data</button>
      </form>
    </div>
  );
}
