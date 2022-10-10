import React from "react";

export const Card = ({ children }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      {children}
    </div>
  );
};
