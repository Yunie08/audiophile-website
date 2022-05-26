import { useState, useEffect } from "react";

// Check if click outside of "ref" component
// used for closing dropdown menu, cart modal, etc...
const useClickOutside = (isOpen, ref) => {
  const [isClickedOutside, setIsClickedOutside] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsClickedOutside(true);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
      setIsClickedOutside(false);
    };
  }, [isOpen, ref]);

  return isClickedOutside;
};

export default useClickOutside;
