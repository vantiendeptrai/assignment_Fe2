import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../Footer";
import Header from "../Header";

type Props = {};

const LayoutWebsite = (props: Props) => {
  return (
    <div>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default LayoutWebsite;
