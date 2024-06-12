import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import BlogImg from "./BlogImg";

function CardsContainer({ data, title }) {
  return (
    <div className="w-full mb-7 pb-5 border-grey-900 border-b">
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
                  <div className="font-semibold mb-1">{name}</div>
                  <div className="text-gray-700">{desc}</div>
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
