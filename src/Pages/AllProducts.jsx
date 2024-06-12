import React, { useEffect, useState } from "react";
import CardsContainer from "../Components/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productsSlice";

const soundSystems = [
  {
    id: 1,
    name: "QSC CP8",
    description:
      "High-performance, compact, and powerful sound system suitable for a wide range of events.",
    image:
      "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHNwZWFrZXJ8ZW58MHx8fHwxNjU0OTYyODAz&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: 2,
    name: "JBL Professional EON ONE",
    description: "All-in-one rechargeable personal PA system with Bluetooth.",
    image:
      "https://images.unsplash.com/photo-1547721064-da6cfb341d50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHNwZWFrZXJ8ZW58MHx8fHwxNjU0OTYyODAz&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: 3,
    name: "Bose S1 Pro",
    description:
      "Multi-position PA system with Bluetooth for high-quality sound.",
    image:
      "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHNwZWFrZXJ8ZW58MHx8fHwxNjU0OTYyODAz&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: 4,
    name: "Yamaha StagePas 400BT",
    description:
      "Portable PA system with Bluetooth and high-quality sound output.",
    image:
      "https://images.unsplash.com/photo-1593642532400-2682810df593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHNwZWFrZXJ8ZW58MHx8fHwxNjU0OTYyODAz&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: 5,
    name: "Mackie FreePlay LIVE",
    description: "Portable PA with Bluetooth and high-fidelity sound.",
    image:
      "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHNwZWFrZXJ8ZW58MHx8fHwxNjU0OTYyODAz&ixlib=rb-1.2.1&q=80&w=1080",
  },
];

const lights = [
  {
    id: 1,
    name: "Chauvet DJ GigBAR 2",
    description: "All-in-one 4-in-1 LED lighting system.",
    image:
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxpZ2h0aW5nfGVufDB8fHx8MTY1NDk3MTcyMg&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: 2,
    name: "ADJ Inno Pocket Spot",
    description: "Compact moving head with a bright LED source.",
    image:
      "https://images.unsplash.com/photo-1547721064-da6cfb341d50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHNwZWFrZXJ8ZW58MHx8fHwxNjU0OTYyODAz&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: 3,
    name: "Blizzard Lighting LB-Par Quad RGBA",
    description: "High-power LED par fixture with excellent color mixing.",
    image:
      "https://images.unsplash.com/photo-1557683316-973673baf926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fGxpZ2h0c3xlbnwwfHx8fDE2NTQ5NzE2OTE&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: 4,
    name: "Eliminator Lighting LED Par Fixture",
    description: "Versatile LED par fixture with vibrant colors.",
    image:
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxpZ2h0aW5nfGVufDB8fHx8MTY1NDk3MTcyMg&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: 5,
    name: "Chauvet DJ SlimPAR 64",
    description:
      "Low-profile, high-power LED PAR designed for any application.",
    image:
      "https://images.unsplash.com/photo-1547721064-da6cfb341d50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHNwZWFrZXJ8ZW58MHx8fHwxNjU0OTYyODAz&ixlib=rb-1.2.1&q=80&w=1080",
  },
];

function AllProducts() {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state?.productsReducer);
  const [products, setProducts] = useState(null);

  // fetch all the products on page load
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  // set the products state to the allProducts which is fetched from the server
  useEffect(() => {
    setProducts(allProducts);
  }, [dispatch, allProducts]);

  return (
    <div className="page-center p-5 w-full flex gap-10 ">
      {/* filter section */}
      <div className="border w-[250px] hidden sm:block">filter section</div>

      <div className="w-full">
        <CardsContainer data={products} title={"All products"} />
      </div>
    </div>
  );
}

export default AllProducts;
