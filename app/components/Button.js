import React from "react";

export function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full shadow bg-blue-500 text-white hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
}
