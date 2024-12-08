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

const Modal = forwardRef(({ children, open, onClose, className = "" }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    openModal: () => dialog.current?.showModal(),
    closeModal: () => dialog.current?.close(),
  }));

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    } else if (modal.open) {
      modal.close();
    }
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      <motion.dialog
        ref={dialog}
        className={`modal ${className}`}
        onClose={onClose}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="sticky right-4 top-4 flex justify-end">
          <button
            className="border-0 flex items-center justify-center w-10 h-10 text-right hover:rotate-90 transition-all duration-300"
            onClick={() => dialog.current?.close()}
          >
            <IoCloseOutline className="w-8 h-8" />
          </button>
        </div>
        <div className="scroll-auto">{children}</div>
      </motion.dialog>
    </AnimatePresence>,
    document.getElementById("modal")
  );
});

export default Modal;
