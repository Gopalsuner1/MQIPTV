import React from 'react'

const ShowCaseCard = ({ name, icon, isFocused }) => {
  return (
    <div
      className={`w-56 flex flex-col items-center justify-center rounded bg-gray-900 transition
        ${isFocused ? "border-4 border-blue-500 scale-110" : "border border-gray-700"}
      `}
    >
      <img src={icon} alt="" className="w-40 h-40" />
      <h1 className="font-bold mt-2">{name}</h1>
    </div>
  );
};

export default ShowCaseCard