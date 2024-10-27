const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full flex justify-center items-center text-white p-6 md:p-10 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-around gap-10 md:gap-16">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold">QUICK LINKS</h2>
            <ul>
              <li>Our Projects</li>
              <li>Sustainability</li>
              <li>Services</li>
              <li>News</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold">UAE - DUBAI</h2>
            <p>000 xyz,</p>
            <p>Country_Name,</p>
            <p>P.O. Box: 0000</p>
            <p>Tel: +99999999</p>
            <p>Fax: +999999999</p>
            <p>E-mail: info@versai.in/About-us</p>
          </div>
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold">JAIPUR INDIA</h2>
            <p>000 xyz,</p>
            <p>Country_Name,</p>
            <p>P.O. Box: 0000</p>
            <p>Tel: +99999999</p>
            <p>Fax: +999999999</p>
            <p>E-mail: info@versai.in/About-us</p>
          </div>
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold">XYZ INDIA</h2>
            <p>000 xyz,</p>
            <p>Country_Name,</p>
            <p>P.O. Box: 0000</p>
            <p>Tel: +99999999</p>
            <p>Fax: +999999999</p>
            <p>E-mail: info@versai.in/About-us</p>
          </div>
        </div>
        <div className="flex justify-center mt-8 md:mt-10">
          <p className="text-center text-sm md:text-lg">Copyright 2022 Versai. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
