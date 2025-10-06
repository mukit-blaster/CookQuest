import React from "react";

const Footer = () => {
  return (
    <footer
      className="
        text-center text-gray-400 text-xs sm:text-sm md:text-base 
        mt-12 py-4 sm:py-6 px-4 
        border-t border-[#ff914d]/30 
        bg-[#1a0e0a]/90 backdrop-blur-sm 
        flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3
      "
    >
      <p className="flex flex-wrap justify-center items-center gap-1">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-[#ff914d] font-semibold">CookQuest</span>
      </p>
      <p className="text-lg sm:text-xl">🍕🥗🍩</p>
    </footer>
  );
};

export default Footer;
