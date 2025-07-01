import React, {useState} from "react";

const tabs = ["Overview", "Spreadsheet", "Reports"];

const Tabs: React.FC = () =>{
    const [activeTab, setActiveTab] = useState("Spreadsheet");

    return (
        <div className="flex space-x-4 border-b pb-2 mb-4">
            {tabs.map((tab)=> (
                <button
                key={tab}
                onClick={()=> {
                    setActiveTab(tab);
                    console.log(`Switched to tab: ${tab}`);
                }}

                className={`text-sm px-5 py-2 rounded-md font-medium transition ${
                    activeTab === tab ? "bg-blue-100 text-blue-700 border border-blue-300 shadow-sm" :
                        "text-gray-500 hover:bg-gray-100"
                }`}>
                    {tab}
                </button>
            ))}
        </div>
    )
}

export default Tabs;