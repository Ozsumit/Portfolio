import React from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 w-[95vw] h-[10vh] flex justify-center items-center bg-transparent">
      <nav className="flex flex-row justify-center items-center gap-[4vw]">
        {["Home", "Work", "About", "Contact"].map((item) => (
          <Link
            key={item}
            href={`#${item}`}
            className="relative flex justify-center items-center text-[#d6d6d6] no-underline font-mono w-[78px] text-lg md:text-xl before:absolute before:bottom-[-20%] before:left-1/2 before:w-0 before:h-[2px] before:bg-[#d6d6d6] before:transition-all before:duration-300 before:ease-linear before:transform before:-translate-x-1/2 hover:before:w-3/4 hover:before:bg-[#f0f0f0]"
          >
            {item}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
