import React, { useRef, useEffect } from "react";
import { dummyData } from "../data/sheetData";

const Spreadsheet: React.FC = () => {
    const tableRef = useRef<HTMLTableElement>(null);
    const numRows = dummyData.length;
    const numCols = 4;

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTableCellElement>, row: number, col: number) => {
        const key = e.key;
        let newRow = row;
        let newCol = col;

        if (key === "ArrowUp") newRow--;
        else if (key === "ArrowDown") newRow++;
        else if (key === "ArrowLeft") newCol--;
        else if (key === "ArrowRight") newCol++;

        newRow = Math.max(0, Math.min(numRows - 1, newRow));
        newCol = Math.max(0, Math.min(numCols - 1, newCol));

        const next = document.getElementById(`cell-${newRow}-${newCol}`);
        if (next) {
            e.preventDefault();
            next.focus();
        }
    };

    useEffect(() => {
        const table = tableRef.current;
        if (!table) return;

        const cols = table.querySelectorAll("th");

        cols.forEach((col) => {
            const resizer = document.createElement("div");
            resizer.className = "absolute right-0 top-0 h-full w-1 cursor-col-resize bg-transparent";
            resizer.addEventListener("mousedown", initResize);
            col.appendChild(resizer);
            col.classList.add("relative");
        });

        function initResize(e: MouseEvent) {
            const th = (e.target as HTMLElement).parentElement as HTMLElement;
            const startX = e.clientX;
            const startWidth = th.offsetWidth;

            function doDrag(e: MouseEvent) {
                th.style.width = `${startWidth + (e.clientX - startX)}px`;
            }

            function stopDrag() {
                window.removeEventListener("mousemove", doDrag);
                window.removeEventListener("mouseup", stopDrag);
            }

            window.addEventListener("mousemove", doDrag);
            window.addEventListener("mouseup", stopDrag);
        }
    }, []);

    return (
        <div className="overflow-auto mt-4">
            <table ref={tableRef} className="min-w-full border text-sm table-fixed">
                <thead className="border px-3 py-2 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                <tr>
                    <th className="border px-3 py-2 w-[100px]">ID</th>
                    <th className="border px-3 py-2 w-[200px]">Name</th>
                    <th className="border px-3 py-2 w-[100px]">Age</th>
                    <th className="border px-3 py-2 w-[200px]">Role</th>
                    <th className="border px-3 py-2 w-[200px]">Location</th>
                </tr>
                </thead>
                <tbody>
                {dummyData.map((row, rowIndex) => (
                    <tr key={row.id} className="hover:bg-gray-50 transition">
                        <td className="border px-3 py-2">{row.id}</td>
                        {[row.name, row.age, row.role, row.location].map((val, colIndex) => (
                            <td
                                key={colIndex}
                                id={`cell-${rowIndex}-${colIndex}`}
                                contentEditable
                                tabIndex={0}
                                onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex)}
                                className="border px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                            >
                                {val}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Spreadsheet;
