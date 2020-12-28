import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Renderer = (Component) => {
  const [selectedRouteIndex, setSelectedRouteIndex] = React.useState(0);

  return (
    <div id="wrapper">
      <Header />
      <main id="main">
        <Component selectedRouteIndex={selectedRouteIndex} />{" "}
      </main>
      <Footer />
    </div>
  );
};

const Page = (P) => {
  return Renderer.bind(this, P);
};

export default Page;
