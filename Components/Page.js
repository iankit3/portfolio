import React, { Children } from "react";
import Footer from "./Footer";
import Header from "./Header";

export const withRenderer = (Component) => {
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

export const Wrapper = ({children}) => {
  const [selectedRouteIndex, setSelectedRouteIndex] = React.useState(0);

  return (
    <div id="wrapper">
      <Header />
      <main id="main">
        {React.Children.map(children, Child => {
            return React.cloneElement(Child, {selectedRouteIndex: selectedRouteIndex});
        })}
      </main>
      <Footer />
    </div>
  );
};

const Page = (P) => {
  return withRenderer.bind(this, P);
};

export default Page;
