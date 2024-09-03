import Image from "next/image";
import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-secondary z-[100] overflow-hidden flex items-center justify-center">
        <FaSpinner 
          className="w-28 h-28 animate-spin"
        />
    </div>
  );
};

export default Loader;
