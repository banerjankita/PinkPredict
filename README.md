# 🎀 PinkPredict — Breast Cancer Prediction Web App

**PinkPredict** is a full-stack web app that helps users predict the likelihood of breast cancer using a trained machine learning model. It’s designed to not only provide predictions but also raise awareness and offer support through interactive tools.

🌐 **Live App**: [https://pink-predict.vercel.app](https://pink-predict.vercel.app)

---

## ✨ Features

- 🔍 **ML-Based Prediction** – Enter medical features to get a prediction  
- 🧠 **Google Gemini AI Chatbot** – Ask questions and get health-related responses  
- 🧾 **Breast Cancer Awareness Quiz** – Learn important facts through interactive questions  
- 🗺️ **Nearby Hospital Map** – Find nearby cancer hospitals using **Leaflet.js**  
- 🔐 **Auth0 Login System** – Secure user authentication  
- 🎨 **Dark-themed, responsive design** – Fully styled using plain CSS (no Tailwind)  

---

## 🛠️ Tech Stack

- **Frontend**: React + Vite, CSS3  
- **Backend**: FastAPI, Uvicorn  
- **Machine Learning**: Scikit-learn, Pandas  
- **Map Integration**: Leaflet.js, Google Maps APIs  
- **Authentication**: Auth0  
- **AI Integration**: Google Gemini API  

---

## 📁 Folder Structure

```
PinkPredict/
├── client/             # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
├── server/             # FastAPI backend
│   ├── main.py
│   └── model/          # ML model and preprocessing
└── README.md
```

---

## 🧪 Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/banerjankita/PinkPredict.git
cd PinkPredict
```

### 2. Backend setup

```bash
cd server
pip install -r requirements.txt
uvicorn main:app --reload
```

### 3. Frontend setup

```bash
cd client
npm install
npm run dev
```

---

## 💡 Future Improvements

- Add prediction history for users  
- Improve chatbot context retention  
- Add health tips based on prediction results  
- Mobile UI enhancements  

---

## 🙋‍♀️ Author

**Ankita Banerjee**  
A tech enthusiast passionate about building meaningful products that intersect **AI, healthcare, and education**.  
📫 [LinkedIn](https://www.linkedin.com/in/ankita-banerjee-0ab30328b)

