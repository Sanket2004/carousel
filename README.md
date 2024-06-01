# React Carousel with React-Slick and Tailwind CSS

This project demonstrates a responsive image carousel using `react-slick` and styled with Tailwind CSS. The carousel is set to auto-slide and adjusts the number of visible slides based on the screen size.

## Features

- **Auto-Slide**: The carousel automatically transitions between slides every 3 seconds.
- **Responsive Design**: Adjusts the number of visible slides based on the screen width:
  - 4 slides for large screens (≥ 1024px)
  - 3 slides for medium screens (≥ 768px)
  - 2 slides for small screens (≥ 480px)
  - 1 slide for extra small screens (< 480px)
- **Hover Effects**: Image opacity transitions to reveal text content on hover.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Sanket2004/react-carousel.git
    cd react-carousel
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```

## Usage

To use the carousel component in your project, follow these steps:

1. **Install React Slick**:
    ```sh
    npm install react-slick slick-carousel
    ```

2. **Import Carousel Component**:
    Ensure you have the necessary CSS files imported for `react-slick` and Tailwind CSS in your project.

3. **Create Carousel Component**:
    Create a new file `src/Carousel.js` and add the following code:

    ```jsx
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
    ```

4. **Add Carousel to Your App**:
    Import and use the `Carousel` component in your main application file, e.g., `src/App.js`:

    ```jsx
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

    ```

5. **Run Your Application**:
    Start your development server if it's not already running:

    ```sh
    npm run dev
    ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

