import React from "react";

const Switch = ({ isActive, handleActive }) => {
    const mode = isActive ? "🌑" : "☀️";

    return (
        <label className="inline-flex items-center cursor-pointer ">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={handleActive}
                checked={isActive}
            />
            <div className="relative w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[21px] rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.8px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 outline-none "></div>
            <span className="ms-3 ">
                {mode}
            </span>
        </label>
    );
};

export default Switch;
