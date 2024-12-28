import { useState } from "react";
import { data2 } from "./data/data";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    const [category, setCategory] = useState("");
    const [selectedRecommendation, setSelectedRecommendation] = useState(
        "Fertilizers Recommendation"
    );

    const categories = Object.keys(data2.crops);
    const subCategories = category
        ? Object.keys(data2.crops[category].soil_category)
        : [];
    const tableData = category ? data2.crops[category] : null;

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleRecommendationChange = (e) => {
        setSelectedRecommendation(e.target.value);
    };

    return (
        <div className="p-4  mx-auto ">
            <Header />

            <div className=" bg-custom-radial-gradient rounded-xl shadow-lg p-6  border-t-6 border-t-gray-300">
                <div className="flex flex-col gap-4   ">
                    <h2 className="  text-xl md:text-2xl text-center font-bold">
                        Select Crop and Recommendation Type
                    </h2>
                    <div className="mb-10 md:mb-0 flex flex-col md:flex-row mt-4 w-full justify-center gap-4">
                        <select
                            className="p-2 pl-4 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={category}
                            onChange={handleCategoryChange}
                        >
                            <option value="">Select Crop</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                        <select
                            className="p-2 pl-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={selectedRecommendation}
                            onChange={handleRecommendationChange}
                        >
                            <option value="Fertilizers Recommendation">
                                Basic Recommendation
                            </option>
                            <option value="Fertilizers Recommendation Alternative 1">
                                Alternative 1
                            </option>
                            <option value="Fertilizers Recommendation Alternative 2">
                                Alternative 2
                            </option>
                        </select>
                        <Link
                            to={
                                "https://nwfc.pmd.gov.pk/new/daily-forecast-en.php"
                            }
                            target="_blank"
                            className="bg-green-500 text-white text-center px-4 py-2 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            Get Weather
                        </Link>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    {tableData ? (
                        subCategories.map((sub) => {
                            const soil = tableData.soil_category[sub];
                            const recommendation =
                                soil[selectedRecommendation] || {};

                            return (
                                <div key={sub} className="mb-8">
                                    <div className="flex justify-between mb-4">
                                        <h3 className="text-2xl font-semibold mb-4">
                                            {sub}
                                        </h3>

                                        <button
                                            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                            onClick={() => {
                                                alert("Coming Soon");
                                            }}
                                        >
                                            View Price
                                        </button>
                                    </div>
                                    <table className="min-w-full bg-white text-black text border border-gray-300 rounded-lg overflow-hidden">
                                        <thead className="bg-gray-350">
                                            <tr>
                                                <th className="px-4 py-2 border-b border-l text-left">
                                                    ID
                                                </th>
                                                <th className="px-4 py-2 border-b text-left">
                                                    Properties
                                                </th>
                                                <th className="px-4 py-2 border-b text-center">
                                                    Values
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2 border-b font-medium">
                                                    1
                                                </td>
                                                <td className="px-4 py-2 border-b font-medium">
                                                    Soil Type
                                                </td>
                                                <td className="px-4 py-2 border-b text-center">
                                                    {soil.soil_type}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 border-b font-medium">
                                                    2
                                                </td>
                                                <td className="px-4 py-2 border-b font-medium">
                                                    N
                                                </td>
                                                <td className="px-4 py-2 border-b text-center">
                                                    {soil.N}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 border-b font-medium">
                                                    3
                                                </td>
                                                <td className="px-4 py-2 border-b font-medium">
                                                    P2O5
                                                </td>
                                                <td className="px-4 py-2 border-b text-center">
                                                    {soil.P2O5}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 border-b font-medium">
                                                    4
                                                </td>
                                                <td className="px-4 py-2 border-b font-medium">
                                                    K2O
                                                </td>
                                                <td className="px-4 py-2 border-b text-center">
                                                    {soil.K2O}
                                                </td>
                                            </tr>
                                            {Object.entries(recommendation).map(
                                                ([key, value], index) => (
                                                    <tr key={key}>
                                                        <td className="px-4 py-2 border-b font-medium">
                                                            {index + 5}
                                                        </td>
                                                        <td className="px-4 py-2 border-b font-medium">
                                                            {key}
                                                        </td>
                                                        <td className="px-4 py-2 border-b text-center">
                                                            {value}
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            );
                        })
                    ) : (
                        <div className="text-gray-500 text-center py-24 ">
                            Please select a crop to view recommendations
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
