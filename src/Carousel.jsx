// src/Carousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 slides at a time by default
    slidesToScroll: 1,
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 3000, // Auto-slide interval in milliseconds
    responsive: [
      {
        breakpoint: 1024, // Screen width 1024px or less
        settings: {
          slidesToShow: 3, // Show 3 slides at a time
        },
      },
      {
        breakpoint: 768, // Screen width 768px or less
        settings: {
          slidesToShow: 2, // Show 2 slides at a time
        },
      },
      {
        breakpoint: 480, // Screen width 480px or less
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Slider {...settings}>
        <div className="group relative p-2">
          <img
            src="https://via.placeholder.com/300"
            alt="Service 1"
            className="w-full h-auto object-cover group-hover:opacity-0 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-red-500 text-white m-2 p-4 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-2xl font-bold">SERVICE 1</h3>
            <p className="mt-2 text-center">
              Morbi sed lacus nec risus finibus feugiat at fermentum nibh. Pellentesque.
            </p>
            <a href="#" className="mt-4 text-red-500 bg-white py-2 px-4 text-sm">
              READ MORE →
            </a>
          </div>
        </div>
        <div className="group relative p-2">
          <img
            src="https://via.placeholder.com/300"
            alt="Service 2"
            className="w-full h-auto object-cover group-hover:opacity-0 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-red-500 text-white m-2 p-4 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-2xl font-bold">SERVICE 2</h3>
            <p className="mt-2 text-center">
              Morbi sed lacus nec risus finibus feugiat at fermentum nibh. Pellentesque.
            </p>
            <a href="#" className="mt-4 text-red-500 bg-white py-2 px-4 text-sm">
              READ MORE →
            </a>
          </div>
        </div>
        <div className="group relative p-2">
          <img
            src="https://via.placeholder.com/300"
            alt="Service 3"
            className="w-full h-auto object-cover group-hover:opacity-0 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-red-500 text-white m-2 p-4 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-2xl font-bold">SERVICE 3</h3>
            <p className="mt-2 text-center">
              Morbi sed lacus nec risus finibus feugiat at fermentum nibh. Pellentesque.
            </p>
            <a href="#" className="mt-4 text-red-500 bg-white py-2 px-4 text-sm">
              READ MORE →
            </a>
          </div>
        </div>
        <div className="group relative p-2">
          <img
            src="https://via.placeholder.com/300"
            alt="Service 4"
            className="w-full h-auto object-cover group-hover:opacity-0 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-red-500 text-white m-2 p-4 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-2xl font-bold">SERVICE 4</h3>
            <p className="mt-2 text-center">
              Morbi sed lacus nec risus finibus feugiat at fermentum nibh. Pellentesque.
            </p>
            <a href="#" className="mt-4 text-red-500 bg-white py-2 px-4 text-sm">
              READ MORE →
            </a>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
