const Footer = () => {
    return (
        <div className="bg-gray-800 text-white py-4 mt-10">
            <footer className="container mx-auto text-center">
                <p className="mb-2">
                    &copy; 2023 Fertile Calculator. All rights reserved.
                </p>
                <p>
                    For further recommendations, please contact our AGRONOMIST:
                    <a
                        href="tel:+923028261976"
                        className="text-blue-400 hover:underline ml-1"
                    >
                        +923028261976
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default Footer;
