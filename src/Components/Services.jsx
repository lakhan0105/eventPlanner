import React from "react";
import soundSystem from "../assets/sound-system-scott-major-ZP2iqHtUtyc-unsplash.jpg";
import tent from "../assets/tent.png";
import light from "../assets/light.png";
import { Link } from "react-router-dom";

const data = [
  {
    service: "sound systems",
    path: "sound-systems",
    img: soundSystem,
  },
  {
    service: "tent house",
    path: "tent-house",
    img: tent,
  },
  {
    service: "lightings",
    path: "lightings",
    img: light,
  },
];

function Services() {
  return (
    <div className="max-w-[1000px] mx-auto">
      <h2 className="text-2xl font-bold text-center mt-10 mb-1">Services</h2>

      <div className="block sm:flex justify-center gap-5 p-3">
        {data.map((item, index) => {
          const { path, service, img } = item;
          return (
            <article className="mb-7" key={index}>
              <Link to={path}>
                <div className="w-full max-w-[80%] mx-auto h-[150px] sm:w-[210px] sm:h-[150px] border rounded-md overflow-hidden cursor-pointer mb-1 shadow-lg">
                  <img
                    className="w-full h-full object-cover"
                    src={img}
                    alt="not found"
                  />
                </div>
              </Link>

              <h2 className="text-center mt-1 mb-1 capitalize font-medium">
                {service}
              </h2>
              <p className="text-center text-xs px-3 max-w-[90%] mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                dignissimos.
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
