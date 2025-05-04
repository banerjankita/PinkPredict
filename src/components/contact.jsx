import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import contactImage from "../assets/Pink Illustrative Feminine Breast Cancer Awareness Infographic (1).png";
import muchImage from "../assets/much.png";
import stagesImage from "../assets/stages.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import HospitalMap from "../components/HospitalMap";
import axios from 'axios';
import { toast } from "react-toastify"; // ✅
import Footer from "../components/Footer";


// Quiz Component
function QuizSection() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const questions = [
    { text: "Do you have a family history of breast cancer?", weight: 2 },
    { text: "Have you noticed any lumps or unusual changes in your breast?", weight: 3 },
    { text: "Are you above 40 years old?", weight: 1 },
    { text: "Do you smoke or consume alcohol frequently?", weight: 2 },
    { text: "Have you had hormone replacement therapy?", weight: 2 },
    { text: "Do you experience persistent breast pain that does not go away?", weight: 3 },
    { text: "Have you noticed any nipple discharge, especially blood-stained?", weight: 3 },
    { text: "Do you have a history of radiation exposure to the chest?", weight: 2 },
    { text: "Are you overweight or do you have a sedentary lifestyle?", weight: 2 },
    { text: "Do you follow a diet high in processed foods and unhealthy fats?", weight: 1 }
];


  const handleAnswer = (answer) => {
    setAnswers([...answers, answer ? questions[questionIndex].weight : 0]);

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      const totalScore = [...answers, answer ? questions[questionIndex].weight : 0].reduce((a, b) => a + b, 0);
      if (totalScore >= 7) setResult("High Risk: Please consult a doctor.");
      else if (totalScore >= 4) setResult("Moderate Risk: Stay alert and monitor symptoms.");
      else setResult("Low Risk: Maintain regular checkups.");
    }
  };

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold text-pink-300 mb-4">Take a Quiz</h2>
      <p className="text-gray-300 mb-4">Take this short quiz to check if you're at high risk for breast cancer.</p>
      {!showQuiz ? (
        <button
          onClick={() => setShowQuiz(true)}
          className="p-2 bg-pink-500 hover:bg-pink-400 text-white font-bold rounded"
        >
          Start Quiz
        </button>
      ) : result ? (
        <div className="mt-4 text-gray-200">
          <p className="font-semibold">{result}</p>
          <button
            onClick={() => {
              setShowQuiz(false);
              setQuestionIndex(0);
              setAnswers([]);
              setResult(null);
            }}
            className="mt-4 p-2 bg-gray-600 hover:bg-gray-500 text-white rounded"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <p className="text-lg font-medium mb-3">{questions[questionIndex].text}</p>
          <button
            onClick={() => handleAnswer(true)}
            className="mr-2 p-2 bg-green-500 hover:bg-green-400 text-white rounded"
          >
            Yes
          </button>
          <button
            onClick={() => handleAnswer(false)}
            className="p-2 bg-red-500 hover:bg-red-400 text-white rounded"
          >
            No
          </button>
        </div>
      )}
    </section>
  );
}
export default function Contact() {
  const { user, isAuthenticated } = useAuth0();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/feedback", {
        name: isAuthenticated ? user.name : name,
        email: isAuthenticated ? user.email : email,
        message: message,
      });
  
      toast.success("Feedback sent!", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
  
      setMessage("");
      if (!isAuthenticated) {
        setName("");
        setEmail("");
      }
  
      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error sending message", error);
  
      toast.error("Something went wrong while sending your message.", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };
     
  return (
    <div className="w-screen h-screen flex bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-x-hidden">
      {/* Left Image Section */}
      <img 
  src={contactImage} 
  alt="Breast Cancer Awareness" 
  className="hidden md:block fixed left-0 top-0 h-screen w-1/5"
/>


      {/* Right Image Section (Static, Not Scrolling) */}
      <img 
        src={muchImage} 
        alt="Stages of Breast Cancer" 
        className="hidden md:block fixed right-0 top-0 h-screen w-1/5"
      />

      {/* Scrollable Main Content Section */}
      <div className="w-full md:w-3/5 max-w-4xl relative flex flex-col items-start justify-start mx-auto px-5 text-left pt-20 h-screen overflow-y-auto">
        
        {/* Navbar */}
        <div className="w-full flex justify-center z-20">
          <Navbar />
        </div>

        <h1 className="text-6xl font-extrabold mb-15 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 drop-shadow-xl text-center w-full tracking-wide uppercase leading-snug">
          Contact & Awareness
        </h1>

        {/* When to Visit a Hospital */}
        <section id="visit-hospital" className="max-w-3xl text-left">
          <h2 className="text-2xl font-semibold text-pink-300 mb-6">
            When to Visit a Hospital?
          </h2>
          <p className="text-gray-300">
            Early detection of breast cancer can save lives. It is advisable to visit a hospital if you:
          </p>
          <ul className="mt-4 text-gray-300 text-left space-y-2">
            <li>✔ Notice any new lump in your breast or underarm.</li>
            <li>✔ Experience pain in any area of the breast that does not go away.</li>
            <li>✔ Observe changes in breast size, shape, or appearance.</li>
            <li>✔ Have nipple discharge, especially blood-stained fluid.</li>
            <li>✔ Find skin changes like redness, dimpling, or puckering.</li>
          </ul>
        </section>

        {/* Common Symptoms */}
        <section id="common-symptoms" className="max-w-3xl text-left mt-10">
          <h2 className="text-2xl font-semibold text-pink-300 mb-4">
            Common Symptoms of Breast Cancer
          </h2>
          <p className="text-gray-300">
            Being aware of breast cancer symptoms can help with early intervention. Look out for:
          </p>
          <div className="w-full flex justify-center mt-4">
            <img 
              src={stagesImage} 
              alt="Breast Cancer Stages" 
              className="w-full max-w-xl rounded-lg shadow-lg"
            />
          </div>
          <ul className="mt-4 text-gray-300 text-left space-y-2">
            <li>✔ A lump or thickening in the breast or underarm.</li>
            <li>✔ Swelling or shrinkage of one part of the breast.</li>
            <li>✔ Nipple inversion or unusual nipple pain.</li>
            <li>✔ Skin irritation, scaliness, or peeling around the nipple.</li>
            <li>✔ Any unexplained pain in the breast or persistent discomfort.</li>
          </ul>
        </section>
        {/* Quiz Section */}
<section id="quiz-section" className="max-w-3xl text-left mt-4">
  <QuizSection />
</section>


         <section id="feedback-section" className="mt-10">
      <h2 className="text-2xl font-semibold text-pink-300 mb-4">Feedback</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
      <input
  type="text"
  value={isAuthenticated ? user.name : name}
  onChange={(e) => !isAuthenticated && setName(e.target.value)}
  placeholder="Your Name"
  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
  readOnly={isAuthenticated}
/>

<input
  type="email"
  value={isAuthenticated ? user.email : email}
  onChange={(e) => !isAuthenticated && setEmail(e.target.value)}
  placeholder="Your Email"
  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
  readOnly={isAuthenticated}
/>

        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="w-full p-2 bg-pink-500 hover:bg-pink-400 text-white font-bold rounded"
        >
          Send Message
        </button>
      </form>
    </section>
  
{/* Hospital Map Section */}
<section id="hospitals-section" className="max-w-3xl text-left mt-10">
  <h2 className="text-2xl font-semibold text-pink-300 mb-4">
    Nearby Hospitals
  </h2>
  <p className="text-gray-300 mb-4">
    Based on your current location, here are some nearby hospitals where you can get screened or treated.
  </p>
  <HospitalMap />
</section>


        {/* Emergency Helplines */}
<section id="helplines-section" className="mt-10">
  <h2 className="text-2xl font-semibold text-pink-300 mb-4">
    Emergency Helplines & Support
  </h2>
  <p className="text-gray-300">
    If you need immediate assistance, reach out to these helplines:
  </p>

  <ul className="mt-4 text-gray-300 text-left space-y-2">
    <li>📞 <strong>India</strong>: 1800-22-1234 (Breast Cancer Helpline)</li>
    <li>📞 <strong>USA</strong>: 1-800-422-6237 (National Breast Cancer Foundation)</li>
    <li>📞 <strong>UK</strong>: 0808 800 4040 (Cancer Research UK)</li>
    <li>📞 <strong>Canada</strong>: 1-888-939-3333 (Canadian Cancer Society)</li>
    <li>📞 <strong>Australia</strong>: 13 11 20 (Cancer Council Australia)</li>
    <li>📞 <strong>Germany</strong>: 0800 420 30 40 (German Cancer Aid)</li>
    <li>📞 <strong>France</strong>: 0 800 100 036 (Ligue contre le cancer)</li>
    <li>📞 <strong>South Africa</strong>: 0800 22 66 22 (CANSA - Cancer Association of South Africa)</li>
    <li>📞 <strong>Japan</strong>: 03-3541-7830 (Japan Cancer Society)</li>
    <li>📞 <strong>Brazil</strong>: 0800-773-1666 (Instituto Oncoguia)</li>
  </ul>
</section>

       {/* FAQ Section */}
        <section id="faqs-section" className="mt-10">
          <h2 className="text-2xl font-semibold text-pink-300 mb-4">
            Frequently Asked Questions (FAQs)
          </h2>
          <details className="mb-4">
            <summary className="text-pink-400 font-semibold cursor-pointer">What are the early signs of breast cancer?</summary>
            <p className="text-gray-300 mt-2">Early signs include lumps, swelling, nipple discharge, or skin changes.</p>
          </details>
          <details className="mb-4">
            <summary className="text-pink-400 font-semibold cursor-pointer">How often should I get screened?</summary>
            <p className="text-gray-300 mt-2">It depends on age and risk factors. Generally, mammograms are recommended every 1-2 years for women over 40.</p>
          </details>
          <details className="mb-4">
            <summary className="text-pink-400 font-semibold cursor-pointer">Can men also get breast cancer?</summary>
            <p className="text-gray-300 mt-2">Yes, although rare, men can develop breast cancer and should check for symptoms.</p>
          </details>
        </section>
        <div className="w-full flex justify-center">
  <Footer />
</div>

      </div>
    </div>
  );
}










