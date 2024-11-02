import React, { useState } from "react";

const awardsData = [
  {
    date: "30 March 2021",
    title: "ICI-UltraTech Awards 2020",
    category: "Outstanding Concrete Engineer",
    imageUrl: "https://source.unsplash.com/800x600/?portrait",
    description: "This is some dummy text describing the award in more detail...",
    expandedText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et mauris a arcu mollis fringilla. Sed ullamcorper nulla ut diam fermentum, id sollicitudin purus posuere. Phasellus pharetra dolor ac nibh facilisis, et euismod neque congue. Vivamus a lectus vel orci ultricies auctor...",
    dummyImage: "https://source.unsplash.com/800x600/?nature"
  },
  {
    date: "17 October 2017",
    title: "Best Contractor Award",
    description: "Mr. Cherian Varkey, CMD, Cherian Varkey Construction Company…",
    imageUrl: "https://source.unsplash.com/800x600/?person",
    expandedText: "Proin nec metus et dolor venenatis cursus. Morbi fringilla vel quam id fermentum. Integer non purus euismod, malesuada ipsum at, feugiat velit. Phasellus non facilisis magna. Curabitur consectetur dui vel turpis vehicula...",
    dummyImage: "https://source.unsplash.com/800x600/?cityscape"
  },
  {
    date: "6 October 2017",
    title: "CVCC 45th Anniversary Celebration",
    description: "CVCC celebrated 45 years of legacy rooted on a strong foundation…",
    imageUrl: "https://source.unsplash.com/800x600/?business",
    expandedText: "Nunc sed magna ac dui volutpat viverra eget a urna. Cras eget tortor at nisl auctor lacinia nec ac magna. Nulla facilisi. Quisque tincidunt, ipsum a tincidunt venenatis, erat metus dictum dui, ut faucibus enim erat vel nisi...",
    dummyImage: "https://source.unsplash.com/800x600/?celebration"
  },
];

const AwardsSection = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Awards & Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {awardsData.map((award, index) => (
          <AwardCard key={index} award={award} />
        ))}
      </div>
    </div>
  );
};

const AwardCard = ({ award }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
        isExpanded ? "max-h-screen" : "max-h-full"
      }`}
    >
      {!isExpanded ? (
        <>
          <img src={award.imageUrl} alt={award.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-gray-500 text-sm mb-2">{award.date}</p>
            <h3 className="text-lg font-semibold text-blue-800 mb-2">{award.title}</h3>
            {award.category ? (
              <p className="text-gray-600 mb-2">Category: {award.category}</p>
            ) : (
              <p className="text-gray-600 mb-2">{award.description}</p>
            )}
            <button onClick={toggleExpand} className="text-blue-500 hover:text-blue-700 text-sm font-semibold">
              Read More...
            </button>
          </div>
        </>
      ) : (
        <div className="p-4">
          <p className="text-gray-500 text-sm mb-2">{award.date}</p>
          <h3 className="text-lg font-semibold text-blue-800 mb-2">{award.title}</h3>
          <p className="text-gray-600 mb-4">{award.expandedText}</p>
         
          <button onClick={toggleExpand} className="text-blue-500 hover:text-blue-700 text-sm font-semibold">
            Show Less
          </button>
        </div>
      )}
    </div>
  );
};

export default AwardsSection;
