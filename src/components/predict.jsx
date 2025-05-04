import { useState } from "react";
import awarenessImage from "../assets/breastcancerawareness.png";
import cutieImage from "../assets/cute.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Predict() {
  const [inputValues, setInputValues] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInputValues(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let features = inputValues.split(",").map((val) => parseFloat(val.trim()));
      features = features.slice(0, 31).concat(Array(31 - features.length).fill(0));

      const response = await fetch("https://pinkpredict-api.onrender.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ features }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch prediction");
      }

      const data = await response.json();
      setPrediction(data.prediction === 1 ? "Cancerous" : "Non-Cancerous");
    } catch (error) {
      console.error("Error predicting:", error);
      setPrediction("Error fetching prediction. Please check API connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-screen min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      
      {/* Left Image */}
      <img 
        src={cutieImage} 
        alt="Breast Cancer Awareness Left" 
        className="hidden md:block fixed left-0 top-0 h-screen w-1/5"
      />

      {/* Right Image */}
      <img 
        src={awarenessImage} 
        alt="Breast Cancer Awareness Right" 
        className="hidden md:block fixed right-0 top-0 h-screen w-1/5"
      />

      {/* Main Scrollable Content */}
      <div className="relative min-h-screen flex flex-col justify-between items-center w-full md:w-3/5 mx-auto px-6 text-center pt-20 z-10">
      <div className="flex-grow w-full flex flex-col items-center">
        
        {/* Navbar */}
        <div className="w-full flex justify-center z-20">
          <Navbar />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold mt-10 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 drop-shadow-lg tracking-wide uppercase">
          Breast Cancer Prediction
        </h1>

        {/* Prediction Form */}
        <div className="flex items-center justify-center w-full">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl bg-gray-800 p-8 rounded-2xl shadow-xl text-center mb-6 transition-all duration-300 transform hover:shadow-2xl"
          >
            <textarea
              placeholder="Enter up to 31 comma-separated values..."
              value={inputValues}
              onChange={handleChange}
              className="w-full p-4 h-40 rounded-lg bg-gray-700 text-white resize-none outline-none border border-transparent focus:border-pink-400 focus:ring-2 focus:ring-pink-400 transition-all"
            />

            <button
              type="submit"
              className="w-1/2 mx-auto p-4 mt-6 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-lg shadow-md hover:from-pink-600 hover:to-pink-500 transition-all transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Predicting...
                </span>
              ) : (
                "Predict"
              )}
            </button>
          </form>
        </div>

        {/* Prediction Result */}
        {prediction && (
          <div
            className={`p-6 text-2xl font-bold text-center rounded-2xl w-full max-w-md border-2 transition-all ${
              prediction === "Cancerous"
                ? "text-red-400 border-red-400 bg-red-900 bg-opacity-20"
                : "text-green-400 border-green-400 bg-green-900 bg-opacity-20"
            } animate-fade-in`}
          >
            Prediction: {prediction}
          </div>
        )}
        </div>
        <div className="w-full max-w-none mt-2">
  <Footer />
</div>

      </div>
    </div>
  );
}





