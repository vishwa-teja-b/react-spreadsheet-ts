// import React from "react";
import Tabs from "./components/Tabs";
import Toolbar from "./components/Toolbar";
import Spreadsheet from "./components/SpreadSheet.tsx";

function App() {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-xl font-semibold text-gray-800 mb-6 tracking-tight">📊 Spreadsheet View</h1>
            <Tabs />
            <Toolbar />
            <Spreadsheet />
        </div>
    );
}

export default App;
