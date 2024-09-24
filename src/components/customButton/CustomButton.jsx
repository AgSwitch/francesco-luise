import Link from "next/link";
import { Button } from "../ui/button";

const CustomButton = ({ children, className, ...props }) => {
  return (
    <>
      {
        <Button className={`rounded-[25px] px-[30px] h-[45px] ${className}`} {...props}>
          {children}
        </Button>
      }
    </>
  );
};

export default CustomButton;
