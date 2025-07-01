import React from 'react';

const Toolbar: React.FC = () =>{
    return (
        <div className="flex space-x-3 mb-4">
            <button onClick={()=>{
                console.log("Add Row Clicked")
            }} className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                ➕ Add Row
            </button>
            <button
            onClick={()=> console.log("Filter Clicked")}
            className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                🔍 Filter
            </button>

            <button onClick={()=> console.log("Export clicked")}
            className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                📤 Export
            </button>
        </div>
    )
}

export default Toolbar;