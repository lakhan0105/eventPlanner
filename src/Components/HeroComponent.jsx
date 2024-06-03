import React from "react";
import backgroundImage from "/src/assets/IMG_2025.jpeg";

function HeroComponent() {
  return (
    <div
      className="relative h-[55vh] w-full bg-cover bg-center text-white flex justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* top overlay */}
      <div className="absolute inset-0 h-4/4 opacity-85 bg-gradient-to-b from-black to-transparent z-20"></div>

      {/* hero text */}
      <div className="absolute z-20 top-[25%] sm:top-[30%]  px-3 text-center">
        <h2 className="text-3xl font-semibold mb-2 sm:mb-3">
          Your partner in creating memorable Events.
        </h2>
        <p className="mx-auto my-0 max-w-[60%]  mb-5">
          From professional DJ services to top-notch sound and light equipment,
          we have everything you need to make your event a success!
        </p>

        <button className="text-sm px-3 py-1 rounded-md capitalize bg-[#a32a2a]">
          explore Products
        </button>
      </div>

      {/* bottom overlay */}
      <div className="absolute left-0 right-0 bottom-0 h-[10%] opacity-[50%] bg-gradient-to-b from-transparent to-black z-20"></div>
    </div>
  );
}

export default HeroComponent;
