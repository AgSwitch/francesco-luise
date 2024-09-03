import Logo from "../logo/Logo";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-secondary  z-[100] overflow-hidden flex items-center justify-center">
      <Logo className="animate-pulse" />
    </div>
  );
};

export default Loader;
