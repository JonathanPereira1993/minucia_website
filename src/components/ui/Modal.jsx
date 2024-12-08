import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import { AnimatePresence, motion } from "framer-motion";

import { IoCloseOutline } from "react-icons/io5";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = forwardRef(
  ({ title, children, open, onClose, className = "" }, ref) => {
    const dialog = useRef();

    useImperativeHandle(ref, () => ({
      openModal: () => dialog.current?.showModal(),
      closeModal: () => dialog.current?.close(),
    }));

    useEffect(() => {
      const modal = dialog.current;

      if (open) {
        modal.showModal();
        // Disable body scrolling
        window.document.body.style.overflow = "hidden";
      } else if (modal.open) {
        // Enable body scrolling
        window.document.body.style.overflow = "auto";
        modal.close();
      }

      // Cleanup on unmount
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [open, onClose]);

    return createPortal(
      <AnimatePresence>
        <motion.dialog
          ref={dialog}
          className={`modal relative ${className}`}
          onClose={onClose}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="absolute h-[150px] bg-white top-0 right-0 left-0 flex justify-end z-50">
            <button
              className="absolute top-6 right-6 border-0 flex items-center justify-center w-10 h-10 text-right hover:rotate-90 transition-all duration-300"
              onClick={() => dialog.current?.close()}
            >
              <IoCloseOutline className="w-8 h-8" />
            </button>
            {title && (
              <div className="flex items-center justify-center w-full mb-4">
                <h2>{title}</h2>
              </div>
            )}
          </div>

          <div className="scroll-auto pt-[150px]">{children}</div>
        </motion.dialog>
      </AnimatePresence>,
      document.getElementById("modal")
    );
  }
);

export default Modal;
