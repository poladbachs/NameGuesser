"use client";

import { useState, FormEvent } from "react";

import { useRouter } from "next/navigation";

export default function Home() {
  const [inputVal, setInputval] = useState("");
  const {push} = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    push(`/prediction/${inputVal}`)
  }
  return ( 
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-4 shadow-md bg-white rounded-md">
        <h1 className="text-2xl font-semibold mb-4 text-black">Enter Your Name</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input 
          type="text" 
          placeholder="Type your name..." 
          value={inputVal}
          onChange={(e) => setInputval(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
        <button 
          type="submit"
          className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
          Predict Identity</button>
      </form>
    </div>
  );
}
