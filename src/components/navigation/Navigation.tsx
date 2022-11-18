import React from "react";

const Navigation = () => {
  return (
    <nav className="w-full h-20 flex items-center justify-center absolute top-0 left-0 z-30">
      <div className="w-full max-w-[900px] flex items-center justify-between">
        <div className="flex items-center">
          <strong className="text-4xl cursor-pointer">OLogo</strong>

          <ul className="flex items-center justify-center gap-4 ml-8">
            <li className="flex items-center">
              <button>Sākums</button>
            </li>

            <li className="flex items-center">
              <button>Pakalpojumi</button>
            </li>

            <li className="flex items-center">
              <button>Piedāvājumi</button>
            </li>

            <li className="flex items-center">
              <button>Pieredze</button>
            </li>

            <li className="flex items-center">
              <button>Tehnoloģijas</button>
            </li>
          </ul>
        </div>

        <button className="px-2 h-10 border-[#8241ec] border-2 rounded-lg backdrop-blur-lg bg-gradient-to-br from-[#9d1eff] to-[#b30891] text-white font-semibold tracking-wide shadow-lg">
          SAZINĀTIES
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
