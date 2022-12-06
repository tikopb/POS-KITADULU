import React from "react";
import { useState } from "react";
import { MenuItem } from "./Menubar";

const DropDownMenu = ({ submenu, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  return (
    <ul
      className={[
        "gap-2 transition-all ease-in-out duration-1000",
        dropdown ? "flex flex-col" : "hidden",
      ].join(" ")}>
      {submenu.map((data, index) => {
        return (
          <MenuItem
            item={data}
            key={data.Menu_id}
            depthLevel={depthLevel}
          />
        );
      })}
    </ul>
  );
};

export default DropDownMenu;
