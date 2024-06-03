import React from "react";
import HeroComponent from "../Components/HeroComponent";
import { Services } from "../Components";

function Home() {
  return (
    <section>
      <HeroComponent />
      <Services />
    </section>
  );
}

export default Home;
