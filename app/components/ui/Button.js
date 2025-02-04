"use client";
export const Button = ({ children, onClick }) => (
  <button className="p-2 bg-[#346e30] text-white rounded" onClick={onClick}>
    {children}
  </button>
);
