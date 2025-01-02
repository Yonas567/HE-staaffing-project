import React from "react";
import "./App.css"; // Import custom CSS for animations

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
      <h1 className="text-5xl font-extrabold text-green-700 mb-6 animate-fade-in">
        🎄 Merry Christmas! 🎅
      </h1>
      <p className="text-xl text-gray-700 mb-6 animate-bounce">
        Wishing you joy, warmth, and happiness this festive season!
      </p>
      <div className="relative w-64 h-64 bg-white rounded-full shadow-lg animate-spin-slow">
        <div className="absolute top-0 left-0 w-full h-full bg-red-400 rounded-full"></div>
        <div className="absolute top-4 left-4 w-56 h-56 bg-green-300 rounded-full"></div>
        <div className="absolute top-8 left-8 w-48 h-48 bg-yellow-200 rounded-full"></div>
      </div>
      <p className="mt-6 text-gray-500 text-sm">Made with ❤️ by Yonas</p>
    </div>
  );
}

export default App;
