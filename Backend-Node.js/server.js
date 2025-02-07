// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const OpenAI = require("openai");
// require("dotenv").config();

// const app = express();  // ✅ Define `app` before using it
// app.use(cors());
// app.use(bodyParser.json());

// const PORT = process.env.PORT || 5001;

// app.post("/api/chat", async (req, res) => {
//     const { message, apiKey } = req.body;
    
//     if (!apiKey) {
//         return res.status(400).json({ error: "API key is missing" });
//     }

//     try {
//         const openai = new OpenAI({ apiKey });
//         const response = await openai.chat.completions.create({
//             model: "gpt-3.5-turbo",
//             messages: [
//                 { role: "system", content: "You are a Python tutor for kids." },
//                 { role: "user", content: message }
//             ],
//         });

//         res.json({ reply: response.choices[0].message.content });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // ✅ Start the server *after* defining `app`
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const OpenAI = require("openai");
require("dotenv").config();  // ✅ Load environment variables

const app = express();  
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5001;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;  // ✅ Read API key from `.env`

if (!OPENAI_API_KEY) {
    console.error("❌ OpenAI API key is missing! Please set it in your .env file.");
    process.exit(1);  // Stop the server if API key is not set
}

app.post("/api/chat", async (req, res) => {
    const { message } = req.body;
    
    if (!message) {
        return res.status(400).json({ error: "Message is missing" });
    }

    try {
        const openai = new OpenAI({ apiKey: OPENAI_API_KEY });  // ✅ Use API key from `.env`
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a Python tutor for kids." },
                { role: "user", content: message }
            ],
        });

        res.json({ reply: response.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Start the server *after* defining everything
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
