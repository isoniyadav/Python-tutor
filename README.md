🚀 AI Python Tutor

AI Python Tutor is an interactive web-based application designed to help children learn basic Python programming with an AI-powered tutor. The app provides an engaging chat interface where kids can ask Python-related questions and receive easy-to-understand explanations.

📌 Features

✅ Interactive Chat Interface – Kids can ask Python-related questions and receive AI-generated responses.
✅ AI-Powered Assistance – Uses OpenAI API to provide explanations in a simple, beginner-friendly way.
✅ Child-Friendly UI – Simple and engaging design for a smooth learning experience.
✅ API Key Configuration – Users can enter their own OpenAI API key for seamless access.
✅ Error Handling – Displays appropriate messages in case of API issues or invalid inputs.
✅ Secure Implementation – Ensures sensitive data is not hardcoded or exposed.

🛠️ Tech Stack

Frontend: React.js, HTML, CSS
Backend: Node.js, Express.js
API Integration: OpenAI API
State Management: useState (React Hooks)
🚀 How to Run Locally

1️⃣ Clone the Repository
git clone https://github.com/your-username/Python-tutor.git
cd Python-tutor
2️⃣ Install Dependencies
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
3️⃣ Set Up API Key
Create a .env file in the backend directory.
Add your OpenAI API key:
OPENAI_API_KEY=your-api-key-here
4️⃣ Run the Application
Start the Backend Server

cd backend
node server.js
Start the Frontend

cd frontend
npm start
Open http://localhost:3000 in your browser to start using the app! 🚀
📄 API Endpoints

1️⃣ Chat with AI Tutor
Endpoint: POST /api/chat
Request Body (JSON):

{
  "message": "What is a variable in Python?",
  "apiKey": "your-openai-api-key"
}
Response (JSON):

{
  "reply": "A variable in Python is used to store values, e.g., x = 10."
}
🔒 Security Best Practices

⚠ Do not share your API key publicly! Always use environment variables (.env) to store sensitive data.

👨‍💻 Contribution Guide

Want to improve AI Python Tutor? Follow these steps:

Fork the repository
Create a new branch (git checkout -b feature-name)
Make changes and commit (git commit -m "Added new feature")
Push to GitHub (git push origin feature-name)
Create a Pull Request (PR)
📜 License

This project is licensed under the MIT License – free to use and modify.

✨ Happy Coding & Learning Python! 🚀🐍
