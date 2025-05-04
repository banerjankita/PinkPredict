import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // Import Navbar
import leftImage from "../assets/Pink and Red Modern Minimalist Breast Cancer Awareness Instagram Story.png";
import rightImage from "../assets/Breast Cancer Day Instagram Story (1).png";
import missionImage from "../assets/Chart-2-.jpg";
import strongImage from "../assets/strong.png"; // Adjust the path as needed
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative w-screen h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-x-hidden">
      
      {/* Left Image (Fixed) */}
      <img
        src={leftImage}
        alt="Breast Cancer Awareness"
        className="hidden md:block fixed left-0 top-0 h-screen w-1/5"
      />

      {/* Right Image (Fixed) */}
      <img
        src={rightImage}
        alt="Breast Cancer Awareness"
        className="hidden md:block fixed right-0 top-0 h-screen w-1/5"
      />

      {/* Scrollable Main Content */}
      <div className="relative flex flex-col items-start justify-start w-full md:w-3/5 mx-auto px-6 text-left z-10 pt-20 h-full overflow-y-auto">
        
        {/* Navbar (Moved further right) */}
        <div className="w-full flex justify-center z-20">
          <Navbar />
        </div>

        {/* Heading */}
        <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 drop-shadow-xl text-center w-full tracking-wide uppercase leading-snug">
          <span className="text-2xl text-gray-300 block">Welcome to</span>
          <span className="text-pink-400">PinkPredict</span>
        </h1>

        <p className="text-xl font-medium text-gray-300 mb-6 max-w-2xl text-right w-full italic">
          Empowering early detection with AI-driven breast cancer prediction.
        </p>

        {/* What is PinkPredict? */}
        <h2 className="text-3xl font-extralight text-pink-400 mt-1">What is PinkPredict?</h2>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl">
          Breast cancer is one of the most common cancers affecting women worldwide. The color pink is widely recognized as a symbol of breast cancer awareness and solidarity. 
          <span className="text-pink-400 font-semibold"> PinkPredict </span> is an AI-powered tool designed to help detect breast cancer early by analyzing input values and providing predictive insights. 
          By leveraging machine learning, PinkPredict aims to assist in early detection, leading to timely medical intervention and better outcomes.
        </p>

        {/* Who is it for? */}
        <h2 className="text-3xl font-extralight text-pink-400 mt-6">Who is it for?</h2>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl">
          <span className="text-pink-400 font-semibold">PinkPredict</span> is designed for individuals who want to take a proactive step in breast cancer detection. 
          It is particularly beneficial for women who may be at risk, healthcare professionals looking for AI-assisted insights, and researchers exploring machine learning applications in medicine. 
          While PinkPredict does not replace professional medical diagnosis, it serves as an early indicator, encouraging timely consultation with healthcare providers.
        </p>

        {/* What does PinkPredict do? */}
        <h2 className="text-3xl font-extralight text-pink-400 mt-6">What does PinkPredict do?</h2>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl mb-10">
          <span className="text-pink-400 font-semibold">PinkPredict</span> leverages advanced AI algorithms to analyze medical input data and predict the likelihood of breast cancer presence. 
          It uses machine learning models trained on medical datasets to assess key factors and generate insightful predictions. 
          Users can input relevant data, and the system provides a probability-based prediction, offering guidance on whether further medical consultation is recommended. 
          By bridging AI with healthcare, PinkPredict empowers individuals with early detection insights and promotes awareness.
        </p>
        <div id="mission" className="mt-0 max-w-4xl">
  <h2 className="text-3xl font-extralight text-pink-400 mt-0 mb-0">Our Mission</h2>

  {/* Image with Float */}
  <img
    src={missionImage}
    alt="Our Mission"
    className="w-90 md:w-100 float-right ml-6 mb-4 rounded-lg shadow-lg"
  />

  {/* Text Section */}
  <p className="text-lg text-gray-300 mt-6">
    At <span className="text-pink-400 font-semibold">PinkPredict</span>, our mission is to harness the power of artificial intelligence to aid in the early detection of breast cancer. 
    We believe that <strong>early diagnosis saves lives</strong>, and our goal is to make predictive healthcare accessible to everyone. 
    By providing an easy-to-use, AI-powered prediction system, we empower individuals with <strong>valuable insights</strong> about their health, encouraging them to take proactive steps toward medical consultation and further screening.
  </p>

  <p className="text-lg text-gray-300 mt-6">
    We believe that every woman deserves the right to know her risk, to understand her options, and to make informed decisions about her health. 
    That's why we're committed to creating a platform that is not only cutting-edge but also compassionate, empathetic, and user-friendly.
    By bridging the gap between medical expertise and innovative technology, we aim to save lives, alleviate suffering, and inspire hope for a brighter, healthier future for all women.
  </p>

  <p className="text-lg text-gray-300 mt-6">
    Through our platform, we hope to empower women to become active participants in their own healthcare, to foster a sense of community and support, and to facilitate greater collaboration between patients, healthcare providers, and researchers.
    By working together, we can create a world where breast cancer is no longer a life-threatening disease, but a manageable and treatable condition.
  </p>
</div>

<div id="team" className="mt-6 max-w-4xl w-full">
  <h2 className="text-3xl font-extralight text-pink-400 mb-0">Our Team</h2>

  {/* Text and Image Container */}
  <div className="w-full flex flex-col items-center mt-6">
    
    {/* First Paragraph */}
    <p className="text-lg text-gray-300 w-full text-justify">
      We are a dedicated team of four passionate individuals who came together to create 
      <span className="text-pink-400 font-semibold"> PinkPredict</span>, an AI-powered tool 
      designed to assist in the early detection of breast cancer. Using the power of machine 
      learning, we aim to provide an accessible and reliable way for people to check their 
      risk and take proactive steps toward their health.
    </p>

    {/* Image in the Middle */}
    <img src={strongImage} alt="Strong Team" className="w-full max-w-2xl rounded-lg shadow-lg my-6" />

    {/* Second Paragraph */}
    <p className="text-lg text-gray-300 w-full text-justify">
      Beyond detection, our mission is to spread awareness about breast cancer and educate 
      people on the importance of early diagnosis. We believe that technology can make a 
      real difference, and through <span className="text-pink-400 font-semibold">PinkPredict</span>, 
      we hope to empower individuals with knowledge and encourage timely medical consultations.
    </p>

  </div>
</div>


<div id="how-it-works" className="mt-10 max-w-4xl">
  <h2 className="text-3xl font-extralight text-pink-400">How It Works</h2>

  <p className="text-lg text-gray-300 mt-6">
    Our AI-powered model analyzes <span className="italic">31 medical input features</span> extracted from cell nuclei in a breast mass. These features help in distinguishing between <span className="text-pink-400 font-semibold">malignant </span> (cancerous) and <span className="text-pink-400 font-semibold">benign </span> (non-cancerous) tumors with high accuracy. Here’s how the prediction works:
  </p>

  <ul className="text-lg text-gray-300 mt-4 space-y-2">
    <li className="flex items-start">
      <span className="text-pink-400 mr-2">•</span> 
      <span><span className="text-pink-400 font-stretch-70%">Feature Extraction:</span> <span className=" text-gray-300 italic">The system takes 31 input values, including radius mean, texture mean, perimeter mean, smoothness mean, and other characteristics of the cell nuclei.</span></span>
    </li>

    <li className="flex items-start">
      <span className="text-pink-400 mr-2">•</span> 
      <span><span className="text-pink-400 font-stretch-70%">Data Preprocessing:</span> <span className=" text-gray-300 italic">The inputs are normalized to ensure consistency and eliminate any bias due to scale variations.</span></span>
    </li>

    <li className="flex items-start">
      <span className="text-pink-400 mr-2">•</span> 
      <span><span className="text-pink-400 font-stretch-70%">Feature Analysis:</span> <span className=" text-gray-300 italic">Our machine learning model identifies key patterns and relationships among these features that indicate malignancy or benignity.</span></span>
    </li>

    <li className="flex items-start">
      <span className="text-pink-400 mr-2">•</span> 
      <span><span className="text-pink-400 font-stretch-70%">Model Prediction:</span> <span className=" text-gray-300 italic">The processed data is fed into a trained classification model, which calculates the probability of the tumor being cancerous.</span></span>
    </li>

    <li className="flex items-start">
      <span className="text-pink-400 mr-2">•</span> 
      <span><span className="text-pink-400 font-stretch-70%">Thresholding & Decision Making:</span> <span className=" text-gray-300 italic">If the probability surpasses a certain threshold, the tumor is classified as malignant; otherwise, it is considered benign.</span></span>
    </li>

    <li className="flex items-start">
      <span className="text-pink-400 mr-2">•</span> 
      <span><span className="text-pink-400 font-stretch-70%">Result Interpretation:</span> <span className=" text-gray-300 italic">The model outputs a clear result, along with a probability score, to help individuals understand their risk level.</span></span>
    </li>

    <li className="flex items-start">
      <span className="text-pink-400 mr-2">•</span> 
      <span><span className="text-pink-400 font-stretch-70%">Encouraging Medical Consultation:</span> <span className=" text-gray-300 italic">While our system provides a reliable prediction, we strongly recommend consulting a medical professional for further evaluation and screening.</span></span>
    </li>
  </ul>
</div>

<div id="faqs" className="mt-10 max-w-4xl">
  <h2 className="text-3xl font-extralight text-pink-400">Frequently Asked Questions (FAQs)</h2>

  <div className="mt-6 space-y-6">
    <div>
      <h3 className="text-xl text-pink-400">1. What is the purpose of this breast cancer prediction model?</h3>
      <p className=" text-gray-300 italic">This AI-powered model helps predict whether a breast tumor is malignant (cancerous) or benign (non-cancerous) based on medical input features, assisting in early detection.</p>
    </div>

    <div>
      <h3 className="text-xl text-pink-400">2. How accurate is the prediction?</h3>
      <p className=" text-gray-300 italic">The model is trained on a high-quality dataset and achieves high accuracy. However, it should not replace professional medical diagnosis and consultation.</p>
    </div>

    <div>
      <h3 className="text-xl text-pink-400">3. What input values does the model require?</h3>
      <p className=" text-gray-300 italic">The model takes 31 medical input features, such as radius mean, texture mean, perimeter mean, and smoothness mean, extracted from cell nuclei.</p>
    </div>

    <div>
      <h3 className="text-xl text-pink-400">4. Is this model suitable for self-diagnosis?</h3>
      <p className=" text-gray-300 italic">No, this model is designed to assist medical professionals. A final diagnosis should always be made by a doctor after thorough evaluation.</p>
    </div>

    <div>
      <h3 className="text-xl text-pink-400">5. Can I use this model for real-time predictions?</h3>
      <p className=" text-gray-300 italic">Yes, the model is capable of making real-time predictions when provided with the required medical data, ensuring quick assessments.</p>
    </div>

    <div>
      <h3 className="text-xl text-pink-400">6. What should I do if the model predicts a malignant tumor?</h3>
      <p className=" text-gray-300 italic">If the model predicts malignancy, consult a healthcare professional immediately for further tests and confirmation. Early detection is crucial for effective treatment.</p>
    </div>
  </div>
</div>

<div id="terms" className="mt-10 max-w-4xl">
  <h2 className="text-3xl font-extralight text-pink-400">Terms of Use</h2>

  <ul className="mt-6 space-y-4 list-none">
    <li className="flex items-start">
      <span className="text-pink-400 mr-2">•</span> 
      <span className="text-gray-300"><span className="text-pink-400 font-stretch-105%">No Medical Advice:</span> This AI model is for informational and research purposes only. It does not provide medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for medical concerns.</span>
    </li>

    <li className="flex items-start">
      <span className="text-pink-400 mr-2">•</span> 
      <span className="text-gray-300"><span className="text-pink-400 font-stretch-105%">Accuracy and Limitations:</span> While this model is trained for high accuracy, predictions may not always be 100% correct. The system should not be solely relied upon for critical health decisions.</span>
    </li>

    <li className="flex items-start">
      <span className="text-pink-400 mr-2">•</span> 
      <span className="text-gray-300"><span className="text-pink-400 font-stretch-105%">Data Privacy:</span> We do not store or share any user input data. However, users are responsible for ensuring that any data entered complies with privacy and security regulations.</span>
    </li>

    <li className="flex items-start">
      <span className="text-pink-400 mr-2">•</span> 
      <span className="text-gray-300"><span className="text-pink-400 font-stretch-105%">Personal Responsibility:</span> Users agree to use this system at their own risk. We are not responsible for any consequences arising from the use or misuse of this tool.</span>
    </li>

    <li className="flex items-start">
      <span className="text-pink-400 mr-2">•</span> 
      <span className="text-gray-300"><span className="text-pink-400 font-stretch-105%">Modification of Terms:</span> We reserve the right to modify or update these terms at any time without prior notice. Continued use of the system implies acceptance of the updated terms.</span>
    </li>

    <li className="flex items-start">
      <span className="text-pink-400 mr-2">•</span> 
      <span className="text-gray-300"><span className="text-pink-400 font-stretch-105%">Contact Information:</span> If you have any questions or concerns regarding these terms, please contact us through our official channels.</span>
    </li>
  </ul>
</div>
<div className="w-full flex justify-center mt-2">
  <Footer />
</div>

      </div>
    </div>
  );
}









