import React from "react";
import { FiCamera } from "react-icons/fi";

const EmptyState = ({ icon, title, description, actionText, onActionClick }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6">
      <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-300">
        {icon || <FiCamera className="text-gray-500 text-3xl" />}
      </div>
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
      {onActionClick && (
        <button
          onClick={onActionClick}
          className="text-blue-500 text-sm font-semibold mt-3 hover:underline"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;