import { useRef, useEffect } from 'react';
import watermark from './Components/IMG/watermark.png'
import CompanyStats from './Components/CompanyStats';
function App() {
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
    transform: 'scale(1.25)',
    transformOrigin: 'center center',
  }}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

      </div>
      <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-brightness-[0.4] w-full h-full border border-white/30 flex justify-center items-center">
        <div className="relative h-screen px-4 sm:px-8 w-full bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
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
                <button className="bg-blue-600 text-white py-2 px-4 rounded absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  CONTACT US TODAY
                </button>
              </div>
              <hr className="w-[20%] sm:w-[30%] lg:w-[40%] absolute right-0 bottom-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



     

            
     {/* section2 */}
<div className='min-h-screen w-full px-4 sm:px-10 md:px-20 bg-gray-100 items-center flex flex-col justify-center'>
  <h1 className='text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>All Cards</h1>
  
  <div className="flex justify-center items-center">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 sm:p-6 md:p-8">
      
      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://via.placeholder.com/300" alt="Card Image" className="w-full h-1/2 object-cover"/>
        <div className="p-4 sm:p-6 md:p-8 text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Card 1</h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg">
            This is the content of card 1. It's fully responsive and adjusts to screen size.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://via.placeholder.com/300" alt="Card Image" className="w-full h-1/2 object-cover"/>
        <div className="p-4 sm:p-6 md:p-8 text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Card 2</h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg">
            This is the content of card 2. It's fully responsive and adjusts to screen size.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://via.placeholder.com/300" alt="Card Image" className="w-full h-1/2 object-cover"/>
        <div className="p-4 sm:p-6 md:p-8 text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Card 3</h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg">
            This is the content of card 3. It's fully responsive and adjusts to screen size.
          </p>
        </div>
      </div>
      
      {/* Card 4 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://via.placeholder.com/300" alt="Card Image" className="w-full h-1/2 object-cover"/>
        <div className="p-4 sm:p-6 md:p-8 text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Card 4</h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg">
            This is the content of card 4. It's fully responsive and adjusts to screen size.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>


      
      {/* section3 */}
      
 <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 bg-gray-100 relative">
        <img
          src="https://placehold.co/800x600/gray/white?text=Architectural+Drawing"
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
          <div>
           
          <h2 className="text-blue-600 text-sm font-bold mb-2">ABOUT US</h2>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Welcome to Novus Reb Engineering
          </h1>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="text-gray-600 mb-6">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
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
        <p className="text-sm uppercase tracking-widest mb-2">
          We've delivered some of the most
        </p>
        <h1 className="text-4xl font-bold mb-4">Iconic Projects</h1>
        <p className="max-w-2xl mb-6">
          From iconic landmarks to awe-inspiring developments, ALEC has consistently delivered exceptional projects that redefine the built environment. With unrivaled expertise and a passion for excellence, we have left an indelible mark on the landscape.
        </p>
        <button className="px-6 py-2 border border-white text-white uppercase tracking-widest hover:bg-white hover:text-black transition duration-300">
          View Projects
        </button>
      </div>
    </div>
  
      {/* section6*/}
   <div className="bg-[#2C3E50] text-white text-center py-16 px-3 lg:px-5">
      <h1 className="text-2xl lg:text-3xl font-bold mb-12">Why Choose Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto border-gray-500">
        <div className="flex flex-col items-center border-b border-r border-gray-500 py-8">
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

      

      {/* section7 */}
      <h1 className="text-3xl md:text-5xl bg-black opacity-50 text-white  font-bold text-center py-7">Contact Us</h1>
     <div className="relative h-full py-6 bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex  flex-col items-center justify-center h-full text-center text-white px-4">
      
        
        <p className="max-w-2xl mb-12">
         For any inquiries or feedback, please fill out the form below or contact us directly at <a href='info@versai.in' className='decoration-none'>info@versai.in</a> or [your phone number].
        </p>
        <button className="px-6 py-2 border border-white text-white uppercase tracking-widest hover:bg-white hover:text-black transition duration-300">
          Contact
        </button>
      </div>
    </div>




    </div>
  );
}

export default App;
