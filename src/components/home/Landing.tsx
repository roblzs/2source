import Image from "next/image";
import React from "react";

const Landing = () => {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center relative">
      <div className="absolute h-[65vh] w-full z-0 top-0 left-0 bg-gradient-to-br from-[#9dfffc] to-[#eafffe]"></div>

      <div className="w-full max-w-[900px] flex items-center justify-between h-full">
        <div className="flex flex-col items-start justify-center w-[500px] z-10">
          <h1 className="text-white">
            Efektīvākā mājaslapu un e-veikalu izstrāde + bezmaksas hostings
          </h1>

          <h2 className="mt-2">
            Mūsu specializētā web lietotņu veidošanas sistēma ļauj veidot ātras,
            modernas mājaslapas, ļoti īsā laikā, bez kvalitātes zudumiem.
          </h2>
        </div>

        <div className="flex items-end justify-end h-full">
          <div className="relative w-[230px] h-[500px]">
            <Image
              src="/rocket-ship-opt.png"
              alt="Rocket ship burning fuel"
              fill
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
