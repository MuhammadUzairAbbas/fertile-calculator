import imgUrl from "../assets/engro.png";

const Header = () => {
    return (
        <div className="bg-custom-radial-gradient  rounded-xl p-6 mb-6 border border-gray-300 bg-gray-300 shadow-lg">
            <div className="flex items-center justify-between">
                <div className="ml-0 md:ml-10">
                    <img
                        src={imgUrl}
                        alt="potato field"
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full"
                    />
                </div>
                {/* <FaCalculator size={50} /> */}
                <h1 className="text-xl md:text-3xl font-bold ">
                    Fertilizer Calculator
                </h1>
            </div>
        </div>
    );
};

export default Header;
