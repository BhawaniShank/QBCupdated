import React, { useEffect, useState } from 'react';

const CompanyStats = () => {
  const [year, setYear] = useState(0);
  const [projects, setProjects] = useState(0);
  const [employees, setEmployees] = useState(0);

  // Target values for each counter
  const targetYear = 1995;
  const targetProjects = 250;
  const targetEmployees = 500;

  // Duration (in milliseconds) for all counters to reach their targets
  const duration = 2000; // Adjust as needed

  useEffect(() => {
    // Calculate increment values for each counter
    const incrementYear = targetYear / (duration / 10);
    const incrementProjects = targetProjects / (duration / 10);
    const incrementEmployees = targetEmployees / (duration / 10);

    const interval = setInterval(() => {
      setYear((prev) => (prev < targetYear ? Math.ceil(prev + incrementYear) : targetYear));
      setProjects((prev) => (prev < targetProjects ? Math.ceil(prev + incrementProjects) : targetProjects));
      setEmployees((prev) => (prev < targetEmployees ? Math.ceil(prev + incrementEmployees) : targetEmployees));
    }, 10); // Run every 10ms for smoother animation

    // Clear the interval when all counters reach their targets
    return () => clearInterval(interval);
  }, [duration, targetYear, targetProjects, targetEmployees]);

  return (
    <div className='min-h-full py-36 w-full px-4 sm:px-10 md:px-20 bg-[url("https://img.freepik.com/free-photo/modern-business-building-with-glass-wall-from-empty-floor_1127-3093.jpg?t=st=1730098753~exp=1730102353~hmac=d9c34ec6f935fd02c4a5abcd497f5fa67ea721c73fb842d0197562ccda68bbde&w=900")] bg-cover bg-no-repeat bg-gray-100 flex flex-col items-center justify-center'>
      <h1 className='text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>Company Stats</h1>
      
      <div className="flex justify-center text-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 sm:p-6 md:p-8">
          
          {/* Card 1 */}
          <div className=" bg-white bg-opacity-25 backdrop-blur-lg border border-white border-opacity-25 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{year}</h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              Established Year
            </p>
          </div>

          {/* Card 2 */}
          <div className=" bg-white bg-opacity-25 backdrop-blur-lg border border-white border-opacity-25 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{projects}+</h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              Completed Projects
            </p>
          </div>

          {/* Card 3 */}
          <div className=" bg-white bg-opacity-25 backdrop-blur-lg border border-white border-opacity-25 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{employees}+</h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
               Employees
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CompanyStats;
