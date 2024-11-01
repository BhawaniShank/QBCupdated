import { useRef, useEffect } from 'react';
import watermark from './IMG/watermark.png'
import CompanyStats from './CompanyStats';
import Footer from './Footer';
import { useMediaQuery } from 'react-responsive';
import cap from './IMG/cutout-services.png'
import fourr from './IMG/fourr.png'
import onee from './IMG/onee.png'
import twoo from './IMG/twoo.png'
import threee from './IMG/threee.png'
import logo from './IMG/logo.png'
import paralex2 from './IMG/paralex2.jpeg'
import WhyWe from './WhyWe';


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

          <div className="flex flex-col md:flex-row h-full">
            <div className="boxanimation hidden md:block w-full md:w-1/2 bg-gray-100 relative">
              <img
                src={cap}
                alt="Architectural drawing of a modern building"
                className="w-full h-screen object-cover" // Removed opacity
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






     

{/* Section2 */}
<div
  className="parallax-bg min-h-screen w-full px-4 sm:px-10 md:px-20 bg-gray-100 flex flex-col items-center justify-center relative"
  style={{ backgroundImage: `url(${paralex2})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-25"></div>
  <div className='new'>
  <h1 className="text-center text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold my-4">All Cards</h1>

  <div className="flex justify-center items-center w-full">
    <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2 sm:p-4 md:p-6 w-full max-w-full">

      {/* Card 1 */}
      <div
        className="bg-white/90 rounded-xl shadow-lg overflow-hidden flex flex-col bg-cover bg-center h-72 sm:h-80 lg:h-96 relative group brightness-110 hover:brightness-95 transition-all duration-300"
        style={{ backgroundImage: `url(${onee})`, opacity: "0.9" }}
      >
        <div className="flex flex-col items-center justify-center h-full bg-black/30 group-hover:bg-black/50 transition-colors duration-300 relative">
          <img src={logo} alt="Logo" className="h-20 sm:h-32 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white text-center">
            738 SOUTH COUNTY ROAD - PALM BEACH
          </h2>
          <p className="text-white text-xs sm:text-sm mt-1 sm:mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Additional information goes here.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="bg-white/90 rounded-xl shadow-lg overflow-hidden flex flex-col bg-cover bg-center h-72 sm:h-80 lg:h-96 relative group brightness-110 hover:brightness-95 transition-all duration-300"
        style={{ backgroundImage: `url(${twoo})`, opacity: "0.9" }}
      >
        <div className="flex flex-col items-center justify-center h-full bg-black/30 group-hover:bg-black/50 transition-colors duration-300 relative">
          <img src={logo} alt="Logo" className="h-20 sm:h-32 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white text-center">
            738 SOUTH COUNTY ROAD - PALM BEACH
          </h2>
          <p className="text-white text-xs sm:text-sm mt-1 sm:mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Additional information goes here.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div
        className="bg-white/90 rounded-xl shadow-lg overflow-hidden flex flex-col bg-cover bg-center h-72 sm:h-80 lg:h-96 relative group brightness-110 hover:brightness-95 transition-all duration-300"
        style={{ backgroundImage: `url(${threee})`, opacity: "0.9" }}
      >
        <div className="flex flex-col items-center justify-center h-full bg-black/30 group-hover:bg-black/50 transition-colors duration-300 relative">
          <img src={logo} alt="Logo" className="h-20 sm:h-32 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white text-center">
            738 SOUTH COUNTY ROAD - PALM BEACH
          </h2>
          <p className="text-white text-xs sm:text-sm mt-1 sm:mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Additional information goes here.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div
        className="bg-white/90 rounded-xl shadow-lg overflow-hidden flex flex-col bg-cover bg-center h-72 sm:h-80 lg:h-96 relative group brightness-110 hover:brightness-95 transition-all duration-300"
        style={{ backgroundImage: `url(${fourr})`, opacity: "0.9" }}
      >
        <div className="flex flex-col items-center justify-center h-full bg-black/30 group-hover:bg-black/50 transition-colors duration-300 relative">
          <img src={logo} alt="Logo" className="h-20 sm:h-32 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white text-center">
            738 SOUTH COUNTY ROAD - PALM BEACH
          </h2>
          <p className="text-white text-xs sm:text-sm mt-1 sm:mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Additional information goes here.
          </p>
        </div>
      </div>

    </div>
          </div>
          </div>
</div>


   
      


   {/* section    */}
{/* section */}
<div className="flex flex-col items-start p-10 space-y-20 bg-gray-100">
    <div className="space-y-4">
        <div className="w-10 h-1 bg-blue-600 mb-2"></div>
        <div className="flex flex-col md:flex-row  justify-between w-full">
            <h1 className="text-2xl font-bold">OUR VISION</h1>
            <p className="text-gray-700 flex-1 ml-4">
                To be a construction company with ethical standards committed to quality, reliability, customer satisfaction and continuous learning.
            </p>
            <img src={fourr} alt="Vision" className="w-full md:w-1/4 h-full ml-4" />
        </div>
    </div>
    <div className="space-y-4">
        <div className="w-10 h-1 bg-blue-600 mb-2"></div>
        <div className="flex flex-col lg:flex-row justify-between w-full">
            <h1 className="text-2xl font-bold">OUR MISSION</h1>
            <p className="text-gray-700 min-w-[50vw] pl-10 flex-1 ml-4">
                To be a leading infrastructure company recognised for business innovations, focused on total satisfaction for all its stakeholders.
                <br />
                To adopt the latest technologies in the field of Engineering, Construction, Operation, and Maintenance of infrastructure projects.
                <br />
                To encourage innovation, professional integrity, up-gradation of knowledge and skills of employees, and a safe working environment.
            </p>
            <div className="flex justify-between w-full">
            <img src={onee} alt="Mission 1" className="w-1/2 md:w-1/2 h-auto mr-2" />
            <img src={threee} alt="Mission 2" className="w-1/2 md:w-1/2 h-auto ml-2" />
        </div>
        </div>
        
    </div>
</div>











      








<div className="overflow-hidden">
  <div className="relative overflow-hidden rounded-lg w-full h-[400px] bg-cover bg-center transition-transform duration-500 transform hover:scale-110" style={{ backgroundImage: `url(${paralex2})` }}>
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
      <img src={logo} alt="Logo" className="w-24 h-24" />
    </div>
    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white font-semibold text-center">
      <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        Visit our Portfolio
      </span>
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
      <WhyWe/>

      

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
