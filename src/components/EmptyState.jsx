import React from "react";
import { FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";

const EmptyState = ({ icon, title, description, actionText, redirectTo }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6">
      <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-black">
        {icon || <FiCamera className="text-black text-3xl" />}
      </div>
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
      {redirectTo && (
        <Link
          to={redirectTo}
          className="text-blue-500 text-sm font-semibold mt-3 hover:underline"
        >
          {actionText}
        </Link>
      )}
    </div>
  );
};

export default EmptyState;