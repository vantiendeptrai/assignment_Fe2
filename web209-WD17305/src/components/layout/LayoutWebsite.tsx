import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const LayoutWebsite = (props: Props) => {
  return (
    <div>
      <header>
        <img src="" alt="" />

        <input type="text" />

        <span>
          <h1>chào bạn</h1>
          <h2>nam</h2>
        </span>
      </header>
      <Outlet />
    </div>
  );
};

export default LayoutWebsite;
