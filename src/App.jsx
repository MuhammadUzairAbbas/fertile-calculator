import { useState } from "react";
import { FaCalculator } from "react-icons/fa";

const data2 = {
  crops: {
    Wheat: {
      soil_category: {
        "Low Fertile": {
          soil_type: "Organic Matter 0.86%, P=7ppm, K=80 ppm",
          N: "64",
          P2O5: "46",
          K2O: "25",
          "Fertilizers Recommendation": {
            DAP: "2",
            Urea: "2",
            "SOP/MOP": "1",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "4",
            "Zabardast Urea": "1",
            Urea: "1",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "5.1",
            Urea: "1.35",
          },
        },
        "Medium Fertile": {
          soil_type: "Organic Matter=0.86-1.29%, P=7-14ppm, K=80-180ppm",
          N: "54",
          P2O5: "34",
          K2O: "25",
          "Fertilizers Recommendation": {
            DAP: "1.5",
            Urea: "1.75",
            "SOP/MOP": "1",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "3",
            "Zabardast Urea": "1",
            Urea: "0.75",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "3.8",
            Urea: "1.35",
          },
        },
        Fertile: {
          soil_type: "Organic Matter=1.29, P=14ppm, K=180 ppm",
          N: "46",
          P2O5: "30",
          K2O: "25",
          "Fertilizers Recommendation": {
            DAP: "1.5",
            Urea: "1.5",
            "SOP/MOP": "1",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "3",
            "Zabardast Urea": "1",
            Urea: "0.5",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "3.3",
            Urea: "1.35",
          },
        },
        "<350mm Rainfall": {
          soil_type: "Low Rainfall",
          N: "34",
          P2O5: "23",
          K2O: "12",
          "Fertilizers Recommendation": {
            DAP: "1",
            Urea: "1",
            "SOP/MOP": "0.5",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "2",
            "Zabardast Urea": "1",
            Urea: "0",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "2.6",
            Urea: "1.35",
          },
        },
        "350-600mm Rainfall": {
          soil_type: "Medium Rainfall",
          N: "40",
          P2O5: "28",
          K2O: "12",
          "Fertilizers Recommendation": {
            DAP: "1.25",
            Urea: "1.25",
            "SOP/MOP": "0.5",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "2.5",
            "Zabardast Urea": "1",
            Urea: "0.5",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "3.1",
            Urea: "1.35",
          },
        },
        ">600mm Rainfall": {
          soil_type: "High Rainfall",
          N: "48",
          P2O5: "34",
          K2O: "25",
          "Fertilizers Recommendation": {
            DAP: "1.5",
            Urea: "1.5",
            "SOP/MOP": "1",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "3",
            "Zabardast Urea": "1",
            Urea: "0.5",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "3.8",
            Urea: "1.35",
          },
        },
      },
    },
    "Cotton-BT Core": {
      soil_category: {
        "Low Fertile": {
          soil_type: "Organic Matter 0.86%, P=7ppm, K=80 ppm",
          N: "100",
          P2O5: "40",
          K2O: "38",
          "Fertilizers Recommendation": {
            DAP: "1.75",
            Urea: "3.5",
            "SOP/MOP": "1.5",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "3.5",
            "Zabardast Urea": "1",
            Urea: "1.5",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "4.4",
            Urea: "1.35",
          },
        },
        "Medium Fertile": {
          soil_type: "Organic Matter=0.86-1.29%, P=7-14ppm, K=80-180ppm",
          N: "90",
          P2O5: "35",
          K2O: "38",
          "Fertilizers Recommendation": {
            DAP: "1.5",
            Urea: "3.32",
            "SOP/MOP": "1.5",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "3",
            "Zabardast Urea": "1",
            Urea: "1.32",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "3.9",
            Urea: "1.35",
          },
        },
        Fertile: {
          soil_type: "Organic Matter=1.29, P=14ppm, K=180 ppm",
          N: "80",
          P2O5: "30",
          K2O: "38",
          "Fertilizers Recommendation": {
            DAP: "1.3",
            Urea: "2.97",
            "SOP/MOP": "1.5",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "2.6",
            "Zabardast Urea": "1",
            Urea: "1.97",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "3.3",
            Urea: "1.35",
          },
        },
      },
    },
    "Cotton-Non BT": {
      soil_category: {
        "Low Fertile": {
          soil_type: "Organic Matter 0.86%, P=7ppm, K=80 ppm",
          N: "90",
          P2O5: "40",
          K2O: "30",
          "Fertilizers Recommendation": {
            DAP: "1.75",
            Urea: "3.25",
            "SOP/MOP": "1.25",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "3.5",
            "Zabardast Urea": "1",
            Urea: "1.25",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "4.4",
            Urea: "1.35",
          },
        },
        "Medium Fertile": {
          soil_type: "Organic Matter=0.86-1.29%, P=7-14ppm, K=80-180ppm",
          N: "80",
          P2O5: "35",
          K2O: "30",
          "Fertilizers Recommendation": {
            DAP: "1.5",
            Urea: "3",
            "SOP/MOP": "1.25",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "3",
            "Zabardast Urea": "1",
            Urea: "2",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "3.9",
            Urea: "1.35",
          },
        },
        Fertile: {
          soil_type: "Organic Matter=1.29, P=14ppm, K=180 ppm",
          N: "70",
          P2O5: "30",
          K2O: "30",
          "Fertilizers Recommendation": {
            DAP: "1.25",
            Urea: "2.5",
            "SOP/MOP": "1.25",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "2.5",
            "Zabardast Urea": "1",
            Urea: "1.5",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "3.3",
            Urea: "1.35",
          },
        },
      },
    },
    "Maize (Hybrid)": {
      soil_category: {
        "Low Fertile": {
          soil_type: "Organic Matter 0.87%, P=7ppm, K=80 ppm",
          N: "119",
          P2O5: "69",
          K2O: "50",
          "Fertilizers Recommendation": {
            DAP: "3",
            Urea: "4",
            "SOP/MOP": "2",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "6",
            "Zabardast Urea": "1",
            Urea: "3",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "7.7",
            Urea: "1.35",
          },
        },
        "Medium Fertile": {
          soil_type: "Organic Matter=0.87-1.29%, P=7-14ppm, K=80-180ppm",
          N: "92",
          P2O5: "58",
          K2O: "37",
          "Fertilizers Recommendation": {
            DAP: "2.5",
            Urea: "3",
            "SOP/MOP": "1.5",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "5",
            "Zabardast Urea": "1",
            Urea: "2",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "6.4",
            Urea: "1.35",
          },
        },
        Fertile: {
          soil_type: "Organic Matter=1.29, P=14ppm, K=180 ppm",
          N: "75",
          P2O5: "46",
          K2O: "25",
          "Fertilizers Recommendation": {
            DAP: "2",
            Urea: "2.5",
            "SOP/MOP": "1",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "4",
            "Zabardast Urea": "1",
            Urea: "1.5",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "5.1",
            Urea: "1.35",
          },
        },
      },
    },
    "Maize (Barani)": {
      soil_category: {
        "350-600mm Rainfall": {
          soil_type: "Medium Rainfall",
          N: "34",
          P2O5: "23",
          K2O: "12",
          "Fertilizers Recommendation": {
            DAP: "1",
            Urea: "1",
            "SOP/MOP": "0.5",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "2",
            "Zabardast Urea": "1",
            Urea: "0",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "2.6",
            Urea: "1.35",
          },
        },
        ">600mm Rainfall": {
          soil_type: "High Rainfall",
          N: "46",
          P2O5: "34",
          K2O: "12",
          "Fertilizers Recommendation": {
            DAP: "1.5",
            Urea: "1.5",
            "SOP/MOP": "1",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "3",
            "Zabardast Urea": "1",
            Urea: "0.5",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "3.8",
            Urea: "1.35",
          },
        },
      },
    },
    "Maize (Composit Non Hybrid)": {
      soil_category: {
        "Low Fertile": {
          soil_type: "Organic Matter 0.87%, P=7ppm, K=80 ppm",
          N: "92",
          P2O5: "58",
          K2O: "37",
          "Fertilizers Recommendation": {
            DAP: "2.5",
            Urea: "3",
            "SOP/MOP": "1",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "5",
            "Zabardast Urea": "1",
            Urea: "2",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "6.4",
            Urea: "1.35",
          },
        },
        "Medium Fertile": {
          soil_type: "Organic Matter=0.87-1.29%, P=7-14ppm, K=80-180ppm",
          N: "80",
          P2O5: "46",
          K2O: "37",
          "Fertilizers Recommendation": {
            DAP: "2",
            Urea: "2.75",
            "SOP/MOP": "1.5",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "4",
            "Zabardast Urea": "1",
            Urea: "1.75",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "5.1",
            Urea: "1.35",
          },
        },
        Fertile: {
          soil_type: "Organic Matter=1.29, P=14ppm, K=180 ppm",
          N: "70",
          P2O5: "35",
          K2O: "25",
          "Fertilizers Recommendation": {
            DAP: "1.5",
            Urea: "2.5",
            "SOP/MOP": "1",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "3",
            "Zabardast Urea": "1",
            Urea: "1.5",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "3.9",
            Urea: "1.35",
          },
        },
      },
    },
    "Sugarcane (Spring)": {
      soil_category: {
        "Low Fertile": {
          soil_type: "Organic Matter 0.87%, P=7ppm, K=80 ppm",
          N: "120",
          P2O5: "69",
          K2O: "50",
          "Fertilizers Recommendation": {
            DAP: "3",
            Urea: "4",
            "SOP/MOP": "2",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "6",
            "Zabardast Urea": "1",
            Urea: "3",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "7.7",
            Urea: "1.35",
          },
        },
        "Medium Fertile": {
          soil_type: "Organic Matter=0.87-1.29%, P=7-14ppm, K=80-180ppm",
          N: "103",
          P2O5: "57",
          K2O: "50",
          "Fertilizers Recommendation": {
            DAP: "2.5",
            Urea: "3.5",
            "SOP/MOP": "2",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "5",
            "Zabardast Urea": "1",
            Urea: "2.5",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "6.3",
            Urea: "1.35",
          },
        },
        Fertile: {
          soil_type: "Organic Matter=1.29, P=14ppm, K=180 ppm",
          N: "87",
          P2O5: "46",
          K2O: "50",
          "Fertilizers Recommendation": {
            DAP: "2",
            Urea: "3",
            "SOP/MOP": "2",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "4",
            "Zabardast Urea": "1",
            Urea: "2",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "5.1",
            Urea: "1.35",
          },
        },
      },
    },
    "Sugarcane (Ratoon)": {
      soil_category: {
        "Low Fertile": {
          soil_type: "Organic Matter 0.87%, P=7ppm, K=80 ppm",
          N: "156",
          P2O5: "69",
          K2O: "50",
          "Fertilizers Recommendation": {
            DAP: "3",
            Urea: "5.5",
            "SOP/MOP": "2",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "6",
            "Zabardast Urea": "1",
            Urea: "4.5",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "7.7",
            Urea: "1.35",
          },
        },
        "Medium Fertile": {
          soil_type: "Organic Matter=0.87-1.29%, P=7-14ppm, K=80-180ppm",
          N: "134",
          P2O5: "57",
          K2O: "50",
          "Fertilizers Recommendation": {
            DAP: "2.5",
            Urea: "5.25",
            "SOP/MOP": "2",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "5",
            "Zabardast Urea": "1",
            Urea: "4.25",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "6.3",
            Urea: "1.35",
          },
        },
        Fertile: {
          soil_type: "Organic Matter=1.29, P=14ppm, K=180 ppm",
          N: "113",
          P2O5: "46",
          K2O: "50",
          "Fertilizers Recommendation": {
            DAP: "2",
            Urea: "4.1",
            "SOP/MOP": "2",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "4",
            "Zabardast Urea": "1",
            Urea: "3.1",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "5.1",
            Urea: "1.35",
          },
        },
      },
    },
    "Potato": {
      soil_category: {
        Fertile: {
          soil_type: "Organic Matter=1.29, P=14ppm, K=180 ppm",
          N: "100",
          P2O5: "50",
          K2O: "50",
          "Fertilizers Recommendation": {
            DAP: "2.5",
            Urea: "3.5",
            "SOP/MOP": "2",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "5",
            "Zabardast Urea": "1",
            Urea: "2.5",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "5.6",
            Urea: "1.35",
          },
        },
      },
    },
    "Tomato": {
      soil_category: {
        "Medium Fertile (Ops)": {
          soil_type: "Organic Matter 0.86-1.29%, P=7-14ppm, K=80-180 ppm",
          N: "58",
          P2O5: "23",
          K2O: "32",
          "Fertilizers Recommendation": {
            DAP: "1",
            Urea: "2.1",
            "SOP/MOP": "1.25",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "2",
            "Zabardast Urea": "1",
            Urea: "1.1",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "2.6",
            Urea: "1.35",
          },
        },
        "Medium Fertile (Hybrid)": {
          soil_type: "Organic Matter=0.86-1.29%, P=7-14ppm, K=80-180ppm",
          N: "58",
          P2O5: "23",
          K2O: "32",
          "Fertilizers Recommendation": {
            DAP: "1",
            Urea: "2.1",
            "SOP/MOP": "1.25",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "2",
            "Zabardast Urea": "1",
            Urea: "1.1",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "2.6",
            Urea: "1.35",
          },
        },
         "Fertile (Tunnel)": {
          soil_type: "Organic Matter=1.29, P=14ppm, K=180 ppm",
          N: "90",
          P2O5: "46",
          K2O: "100",
          "Fertilizers Recommendation": {
            DAP: "2",
            Urea: "3",
            "SOP/MOP": "4",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "4",
            "Zabardast Urea": "1",
            Urea: "2",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "5.1",
            Urea: "1.35",
          },
        },
      },
    },
    "Citrus-Kinow": {
      soil_category: {
        "Medium Fertile": {
          soil_type: "Organic Matter= 0.86-1.29%, P=7-14ppm, K=80-180 ppm",
          N: "1",
          P2O5: "0.5",
          K2O: "0.5",
          "Fertilizers Recommendation": {
            DAP: "1.1",
            Urea: "1.74",
            "SOP/MOP": "1",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "2.2",
            "Zabardast Urea": "1",
            Urea: "0.74",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "0.1",
            Urea: "1.35",
          },
        },
      },
    },    
    "Mango (15yr Older)": {
      soil_category: {
        "Medium Fertile": {
          soil_type: "Organic Matter= 0.86-1.29%, P=7-14ppm, K=80-180 ppm",
          N: "2",
          P2O5: "3",
          K2O: "2",
          "Fertilizers Recommendation": {
            DAP: "2.2",
            Urea: "2.4",
            "SOP/MOP": "1.5",
          },
          "Fertilizers Recommendation Alternative 1": {
            "Zarkhez Plus": "4.4",
            "Zabardast Urea": "1",
            Urea: "1.4",
          },
          "Fertilizers Recommendation Alternative 2": {
            "NP Plus": "0.3",
            Urea: "1.35",
          },
        },
      },
    },    
    
    
  },
};

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
    <div className="p-4  mx-auto border">
      <div className="bg-gradient-to-r from-green-700 via-yellow-300 to-yellow-400 rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between">
          <FaCalculator />
          <h1 className="text-2xl font-bold text-white">
            Fertilizer Calculator
          </h1>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-700 via-yellow-300 to-yellow-400 rounded-xl shadow-lg p-6">
        <div className="flex flex-col gap-4 mb-6">
          <h2 className="text-xl font-bold">
            Select Crop and Recommendation Type
          </h2>
          <div className="flex gap-4">
            <select
              className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
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
          </div>
        </div>

        <div className="overflow-x-auto">
          {tableData ? (
            subCategories.map((sub) => {
              const soil = tableData.soil_category[sub];
              const recommendation = soil[selectedRecommendation] || {};

              return (
                <div key={sub} className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">{sub}</h3>
                  <table className="min-w-full bg-gray-300 text-black text border border-gray-300 rounded-lg overflow-hidden">
                    <thead className="bg-gray-350">
                      <tr>
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
                          Soil Type
                        </td>
                        <td className="px-4 py-2 border-b text-center">
                          {soil.soil_type}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b font-medium">N</td>
                        <td className="px-4 py-2 border-b text-center">
                          {soil.N}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b font-medium">P2O5</td>
                        <td className="px-4 py-2 border-b text-center">
                          {soil.P2O5}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b font-medium">K2O</td>
                        <td className="px-4 py-2 border-b text-center">
                          {soil.K2O}
                        </td>
                      </tr>
                      {Object.entries(recommendation).map(([key, value]) => (
                        <tr key={key}>
                          <td className="px-4 py-2 border-b font-medium">
                            {key}
                          </td>
                          <td className="px-4 py-2 border-b text-center">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })
          ) : (
            <div className="text-gray-500 text-center py-8">
              Please select a crop to view recommendations
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
