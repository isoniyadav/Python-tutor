import React, { useState } from "react";

const Settings = ({ setApiKey }) => {
    const [key, setKey] = useState("");

    const saveKey = () => {
        localStorage.setItem("apiKey", key);
        setApiKey(key);
    };

    return (
        <div className="settings">
            <h2>Enter OpenAI API Key</h2>
            <input type="text" value={key} onChange={(e) => setKey(e.target.value)} placeholder="Enter your API key" />
            <button onClick={saveKey}>Save Key</button>
        </div>
    );
};

export default Settings;
