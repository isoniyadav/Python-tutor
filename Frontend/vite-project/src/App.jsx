import React, { useState } from "react";
import Chat from "./components/Chat";
import Home from "./components/Home";
import Settings from "./components/Setting";
import "./styles.css";

function App() {
    const [apiKey, setApiKey] = useState(localStorage.getItem("apiKey") || "");

    return (
        <div className="app-container">
            <Home />
            <Settings setApiKey={setApiKey} />
            <Chat apiKey={apiKey} />
        </div>
    );
}

export default App;
