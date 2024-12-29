import imgUrl from "../assets/ZA.svg";
const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-4 mt-10">
      <footer className="container mx-auto text-center">
        <p className="mb-2">
          &copy; 2024 Fertilizer Calculator. All rights reserved.
        </p>
        <p>
          For further recommendations, please contact our AGRONOMIST:
          <a
            href="tel:+923028261976"
            className="text-blue-400 hover:underline ml-1"
          >
            +923028261976
          </a>
        <div className="flex justify-center w-full">

          <img
            src={imgUrl}
            alt="potato field"
            className=" w-8 h-8 md:w-16 md:h-16 mt-2 rounded-full"
            />
            </div>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
