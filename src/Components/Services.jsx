import React from "react";

const data = [
  {
    service: "sound systems",
    path: "/",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?fit=crop&w=1400&q=80",
  },
  {
    service: "tent house",
    path: "/",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?fit=crop&w=1400&q=80",
  },
  {
    service: "lightings",
    path: "/",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?fit=crop&w=1400&q=80",
  },
];

function Services() {
  return (
    <div className="">
      <h2 className="text-xl font-bold text-center mt-10 mb-1">Services</h2>

      <div className="block sm:flex justify-center gap-5 p-3">
        {data.map((item, index) => {
          const { path, service, img } = item;
          return (
            <article className="mb-7" key={index}>
              <div className="w-full max-w-[80%] mx-auto h-[150px] sm:w-[210px] sm:h-[150px] border rounded-md overflow-hidden cursor-pointer mb-1">
                <img
                  className="w-full h-full object-cover"
                  src={img}
                  alt="not found"
                />
              </div>

              <h2 className="text-center mt-1 mb-1">{service}</h2>
              <p className="text-center text-xs px-3 leading-0">
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
