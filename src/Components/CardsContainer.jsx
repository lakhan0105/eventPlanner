import React from "react";
import { NavLink } from "react-router-dom";
import BlogImg from "./BlogImg";

function CardsContainer({ data, title }) {
  if (data?.length === 0) {
    return <h2 className="font-bold mt-10">No product matched</h2>;
  }

  return (
    <div className="w-full mb-7 pb-5 border-grey-900">
      <h2 className="mb-3 font-bold text-2xl capitalize">{title}</h2>

      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.map((item) => {
          const { id, name, desc, img, category, price } = item;

          return (
            <NavLink to={`/single-product/${id}`} key={id}>
              <article className="w-full rounded-lg overflow-hidden bg-white mb-5 shadow-md">
                <div className="img-container h-[200px] sm:h-[150px]">
                  <BlogImg imgId={img} />
                </div>

                <div className="p-2">
                  <div className="font-semibold mb-1 capitalize">{name}</div>
                  <div className="text-gray-700 mb-2 text-sm">{desc}</div>
                  <div>
                    <p className="inline bg-[#a32a2a] text-white text-sm p-1 rounded">
                      <span>₹{price}</span> per day
                    </p>
                  </div>
                </div>
              </article>
            </NavLink>
          );
        })}
      </div>
      {/* <hr /> */}
    </div>
  );
}

export default CardsContainer;
