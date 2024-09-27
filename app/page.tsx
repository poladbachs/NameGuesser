/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputVal, setInputval] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (inputVal === "") {
      setErrorMessage("Input is required for submission."); 
      return;
    }
    setErrorMessage("");

    push(`/prediction/${inputVal}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start relative">
      <div className="flex justify-center flex-wrap mb-4 pt-4 space-x-8">
        <img
          src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
          alt="Next.js"
          className="w-32 h-32 sm:w-24 sm:h-24 md:w-32 md:h-32"
        />
        <img
          src="https://www.logo.wine/a/logo/TypeScript/TypeScript-Logo.wine.svg"
          alt="TypeScript"
          className="w-32 h-32 sm:w-24 sm:h-24 md:w-32 md:h-32"
        />
        <img
          src="https://www.cdnlogo.com/logos/t/34/tailwind-css.svg"
          alt="Tailwind CSS"
          className="w-32 h-32 sm:w-24 sm:h-24 md:w-32 md:h-32"
        />
      </div>

      <div className="p-4 shadow-md bg-white rounded-md max-w-sm w-full mx-4">
        <h1 className="flex items-center justify-center text-2xl font-semibold mb-4 text-black">
          Name Insights
        </h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Type your name..."
            value={inputVal}
            onChange={(e) => setInputval(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Predict Identity
          </button>
        </form>
      </div>
    </div>
  );
}
