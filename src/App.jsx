// src/App.jsx
import React from 'react';
import Carousel from './Carousel';

function App() {
  return (
    <div className="bg-white text-black p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-red-500 font-semibold">WHAT WE DO</h2>
        <h1 className="text-4xl font-bold mt-2">SERVICES PROVIDE FOR YOU</h1>
        <p className="text-gray-700 mt-4">
          Morbi sed lacus nec risus finibus feugiat at fermentum nibh. Pellentesque vitae ante et
          elit fringilla ac at purus. Morbi sed lacus nec risus finibus feugiat at fermentum.
        </p>
        <div className="mt-8">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default App;
