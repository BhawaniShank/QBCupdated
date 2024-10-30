import { useRef, useEffect } from 'react';
import watermark from './IMG/watermark.png'
import CompanyStats from './CompanyStats';
import Footer from './Footer';
import { useMediaQuery } from 'react-responsive';
import cap from './IMG/cutout-services.png'
function Home() {

  // Define media queries for all four breakpoints
  const isSmallScreen = useMediaQuery({ query: '(min-width: 640px)' });
  const isMediumScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const isExtraLargeScreen = useMediaQuery({ query: '(min-width: 1280px)' });

  // Determine scale based on screen size
  let scaleValue = 'scale(7)';
  if (isSmallScreen) scaleValue = 'scale(3)';
  if (isMediumScreen) scaleValue = 'scale(3)';
  if (isLargeScreen) scaleValue = 'scale(1.5)';
  if (isExtraLargeScreen) scaleValue = 'scale(1.2)';

  const videoRef = useRef(null);

  useEffect(() => {
    // Decrease the speed of the video
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Set video speed to 50%
    }
  }, []);

  return (
<div className='flex flex-col'>
  <div>
    <div className="w-full h-screen relative overflow-hidden">
    <div className="w-screen h-screen">
      <iframe
        className="absolute top-0 left-0 w-full h-full bg-black"
        src="https://www.youtube.com/embed/283PD41zho4?autoplay=1&loop=1&playlist=283PD41zho4&mute=1&controls=0"
        title="YouTube video player"
        style={{
          border: 'none',
          transform: scaleValue,
          transformOrigin: 'center center',
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
                  </div>
                  

      <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-brightness-[0.4] w-full h-full border border-white/30 flex justify-center items-center">
        <div className="relative h-screen px-4 sm:px-8 w-full bg-cover bg-center">
          <div className="absolute inset-0 bg-blue-900 opacity-25"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <div className="border-l border-r border-white p-8 relative">
              <hr className="w-[20%] sm:w-[30%] lg:w-[40%] absolute left-0 top-0" />
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 backdrop-blur-3xl bg-transparent border border-white p-4">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold">QBC</div>
              </div>
              <hr className="w-[20%] sm:w-[30%] lg:w-[40%] absolute right-0 top-0" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-12 mb-4">
                Novus Reb Engineering Solutions
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-8">
                We're a civil engineering firm that caters to real estate developers
              </p>
              <hr className="w-[20%] sm:w-[30%] lg:w-[40%] absolute left-0 bottom-0" />
              <div className="relative">
                <button className="bg-blue-600 z-20 text-white py-2 px-4 rounded absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  CONTACT US TODAY
                </button>
              </div>
              <hr className="w-[20%] sm:w-[30%] lg:w-[39%] z-0 absolute right-0 bottom-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

          



{/* section3 */}

          <div className="flex flex-col md:flex-row h-screen">
            <div className="boxanimation w-full md:w-1/2 bg-gray-100 relative">
              <img
                src={cap}
                alt="Architectural drawing of a modern building"
                className="w-full h-full object-cover" // Removed opacity
              />
            </div>
            <div className="w-full md:w-1/2 flex items-center relative justify-center p-6 md:p-12">
              <img
                src={watermark}
                alt="Architectural drawing of a modern building"
                className="w-full p-24 h-full z-0 opacity-5 absolute object-cover" // Removed opacity
              />
              <div className='content2'>
                <h2 className="text-blue-600 text-sm font-bold mb-2">
                  ABOUT US
                </h2>
                <h1 className="text-2xl md:text-4xl font-bold mb-4">
                  Welcome to Novus Reb Engineering
                </h1>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <p className="text-gray-600 mb-6">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>

                {/* Catalog Button */}
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300">
                  View Catalog
                </button>
              </div>
            </div>
          </div>






     

            
{/* section2 */}<div className="parallax-bg min-h-screen w-full px-4 sm:px-10 md:px-20 bg-gray-100 flex flex-col items-center justify-center"
     style={{ backgroundImage: "url('https://img.freepik.com/free-photo/shiny-night-city_1127-8.jpg?t=st=1730099443~exp=1730103043~hmac=a1bd527b583c5729ca57ff0257e3405770aa6aea4641be854c2816dfe8dd80c7&w=1060')" }}>

  <h1 className="text-center text-3xl sm:text-3xl new md:text-5xl mt-10 lg:text-6xl font-bold my-4">All Cards</h1>
  
  <div className="flex justify-center new items-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2 sm:p-4 md:p-6">

      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
        <img src="https://via.placeholder.com/300" alt="Card Image 1" className="w-full h-44 px-5 mt-5 object-cover"/>
        <div className="p-3 sm:p-4 md:p-5 lg:p-6 text-center flex-grow">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">Card 1</h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl">
            This is the content of card 1. It’s fully responsive and adjusts to screen size.
          </p>
        </div>
        <div className="flex w-full justify-center">
          <button className="bg-indigo-500 text-white font-semibold px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-lg my-3 hover:bg-indigo-600 transition duration-200">
            Learn More
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
        <img src="https://via.placeholder.com/300" alt="Card Image 2" className="w-full h-44 px-5 mt-5 object-cover"/>
        <div className="p-3 sm:p-4 md:p-5 lg:p-6 text-center flex-grow">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">Card 2</h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl">
            This is the content of card 2. It’s fully responsive and adjusts to screen size.
          </p>
        </div>
        <div className="flex w-full justify-center">
          <button className="bg-indigo-500 text-white font-semibold px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-lg my-3 hover:bg-indigo-600 transition duration-200">
            Learn More
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
        <img src="https://via.placeholder.com/300" alt="Card Image 3" className="w-full h-44 px-5 mt-5 object-cover"/>
        <div className="p-3 sm:p-4 md:p-5 lg:p-6 text-center flex-grow">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">Card 3</h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl">
            This is the content of card 3. It’s fully responsive and adjusts to screen size.
          </p>
        </div>
        <div className="flex w-full justify-center">
          <button className="bg-indigo-500 text-white font-semibold px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-lg my-3 hover:bg-indigo-600 transition duration-200">
            Learn More
          </button>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
        <img src="https://via.placeholder.com/300" alt="Card Image 4" className="w-full h-44 px-5 mt-5 object-cover"/>
        <div className="p-3 sm:p-4 md:p-5 lg:p-6 text-center flex-grow">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">Card 4</h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl">
            This is the content of card 4. It’s fully responsive and adjusts to screen size.
          </p>
        </div>
        <div className="flex w-full justify-center">
          <button className="bg-indigo-500 text-white font-semibold px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-lg my-3 hover:bg-indigo-600 transition duration-200">
            Learn More
          </button>
        </div>
      </div>

    </div>
  </div>
</div>


      
            {/* section3 */}

          <div className="flex flex-col md:flex-row h-screen">
            <div className="boxanimation w-full md:w-1/2 bg-gray-100 relative">
              <img
                src={cap}
                alt="Architectural drawing of a modern building"
                className="w-full h-full object-cover" // Removed opacity
              />
            </div>
            <div className="w-full md:w-1/2 flex items-center relative justify-center p-6 md:p-12">
              <img
                src={watermark}
                alt="Architectural drawing of a modern building"
                className="w-full p-24 h-full z-0 opacity-5 absolute object-cover" // Removed opacity
              />
              <div className='content2'>
                <h2 className="text-blue-600 text-sm font-bold mb-2">
                  ABOUT US
                </h2>
                <h1 className="text-2xl md:text-4xl font-bold mb-4">
                  Welcome to Novus Reb Engineering
                </h1>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <p className="text-gray-600 mb-6">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>

                {/* Catalog Button */}
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300">
                  View Catalog
                </button>
              </div>
            </div>
          </div>
      
  {/* section4 */}
  <CompanyStats/>

      

     {/* section5 */}
     <div
      className="relative h-full py-36 bg-cover bg-center"
      style={{ backgroundImage: "url('https://placehold.co/1920x1080')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <p className="new text-sm uppercase tracking-widest mb-2">
          We've delivered some of the most
        </p>
        <h1 className="new text-4xl font-bold mb-4">Iconic Projects</h1>
        <p className="new max-w-2xl mb-6">
          From iconic landmarks to awe-inspiring developments, ALEC has consistently delivered exceptional projects that redefine the built environment. With unrivaled expertise and a passion for excellence, we have left an indelible mark on the landscape.
        </p>
        <button className="new px-6 py-2 border border-white text-white uppercase tracking-widest hover:bg-white hover:text-black transition duration-300">
          View Projects
        </button>
      </div>
    </div>
  
      {/* section6*/}
          <div className="bg-[#2C3E50] text-white text-center py-16 px-3 lg:px-5">
              <div className='new'>
      <h1 className="text-2xl lg:text-3xl font-bold mb-12">Why Choose Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto border-gray-500">
        <div className=" flex flex-col items-center border-b border-r border-gray-500 py-8">
          <i className="fas fa-piggy-bank text-5xl lg:text-6xl mb-4"></i>
          <p className="text-base lg:text-lg">No hidden cost, upfront pricing</p>
        </div>
        <div className="flex flex-col items-center border-b border-r border-gray-500 py-8">
          <i className="fas fa-home text-5xl lg:text-6xl mb-4"></i>
          <p className="text-base lg:text-lg">100% family owned and operated</p>
        </div>
        <div className="flex flex-col items-center border-b border-r border-gray-500 py-8">
          <i className="fas fa-certificate text-5xl lg:text-6xl mb-4"></i>
          <p className="text-base lg:text-lg">Fully licensed and accredited</p>
        </div>
        <div className="flex flex-col items-center border-b border-gray-500 py-8">
          <i className="fas fa-calendar-alt text-5xl lg:text-6xl mb-4"></i>
          <p className="text-base lg:text-lg">Work around your schedules</p>
        </div>
        <div className="flex flex-col items-center border-r border-gray-500 py-8">
          <i className="fas fa-lightbulb text-5xl lg:text-6xl mb-4"></i>
          <p className="text-base lg:text-lg">FREE professional advice</p>
        </div>
        <div className="flex flex-col items-center border-r border-gray-500 py-8">
          <i className="fas fa-calculator text-5xl lg:text-6xl mb-4"></i>
          <p className="text-base lg:text-lg">No obligation estimations</p>
        </div>
        <div className="flex flex-col items-center border-r border-gray-500 py-8">
          <i className="fas fa-undo-alt text-5xl lg:text-6xl mb-4"></i>
          <p className="text-base lg:text-lg">100% money back guaranteed</p>
        </div>
        <div className="flex flex-col items-center py-8">
          <i className="fas fa-broom text-5xl lg:text-6xl mb-4"></i>
          <p className="text-base lg:text-lg">We leave your premises clean & tidy</p>
        </div>
                  </div>
                  </div>
    </div>

      

          {/* section7 */}
          <div className="text-3xl  md:text-5xl bg-black opacity-50 text-white  font-bold text-center py-7" >
              <h1 className='new' >Contact Us</h1>
              </div>
     <div className="relative h-full py-6 bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex  flex-col items-center justify-center h-full text-center text-white px-4">
      
        
        <p className="max-w-2xl new mb-12">
         For any inquiries or feedback, please fill out the form below or contact us directly at <a href='info@versai.in' className='decoration-none'>info@versai.in</a> or [your phone number].
        </p>
        <button className="px-6 py-2 new border border-white text-white uppercase tracking-widest hover:bg-white hover:text-black transition duration-300">
          Contact
        </button>
      </div>
    </div>

   {/* footer */}
   <Footer/>

    </div>
  );
}

export default Home;
