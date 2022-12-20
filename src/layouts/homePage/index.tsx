import React from "react";
import Drawer from "../../components/drawer";
import Header from "../../containers/header";
import Topics from "../../containers/topics";
const HomePage: React.FunctionComponent<any> = () => {
  return (
    <>
      <Drawer />
      <Header />
      <Topics />
    </>
  );
};

export default HomePage;
