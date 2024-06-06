import React from "react";

function CardsContainer({ data, title }) {
  return (
    <div className="w-full mb-7 pb-5 border-grey-900 border-b">
      <h2 className="mb-3 font-bold text-2xl capitalize">{title}</h2>

      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => {
          const { id, name, description, image } = item;
          return (
            <article
              key={id}
              className="w-full rounded-lg overflow-hidden bg-white mb-5 shadow-md"
            >
              <div className="img-container h-[200px] sm:h-[150px]">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-2">
                <div className="font-semibold mb-1">{name}</div>
                <div className="text-gray-800">{description}</div>
              </div>
            </article>
          );
        })}
      </div>
      {/* <hr /> */}
    </div>
  );
}

export default CardsContainer;
