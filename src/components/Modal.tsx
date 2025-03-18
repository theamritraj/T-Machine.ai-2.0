import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Container for the modal */}
      <div className="relative bg-white rounded-lg shadow-lg w-96 text-center">
        {/* Floating Robot Image */}
        <img
          src="/src/assets/courseSection/Tmachine.svg"
          alt="robot mascot"
          className="absolute -top-10 -left-10 w-24 h-24"
        />

        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-400 text-white p-4 rounded-t-lg text-lg font-semibold">
          You're about to begin your learning journey! Dive in, explore, and
          enhance your knowledge. Let's get started!
        </div>

        {/* Confirmation Button */}
        <button
          className="mt-4 mb-4 border border-purple-500 text-purple-500 py-2 px-6 rounded-md hover:bg-purple-500 hover:text-white transition"
          onClick={onClose}
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default Modal;
