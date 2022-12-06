import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { selectedCurMenu } from "../store/authSlice";
import DropDownMenu from "./DropDownMenu";

export const MenuItem = ({ item, depthLevel }) => {
  const [dropdown, setDropdown] = useState(true);

  return (
    <li className='w-full space-y-2'>
      {item.children.length > 0 ? (
        <React.Fragment>
          <Link
            role='button'
            type='button'
            to={"#"}
            className={[
              "flex flex-row",
              depthLevel === 0 ? "text-slate-500 font-semibold" : "",
            ].join(" ")}
            aria-haspopup='menu'
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}>
            {item.Name}
            <div className='ml-auto'>
              <span className={["arrow", dropdown ? "up" : "down"].join(" ")} />
            </div>
          </Link>
          <DropDownMenu
            submenu={item.children}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </React.Fragment>
      ) : (
        <NavLink
          to={"#"}
          className={[
            "flex flex-row",
            depthLevel === 0 ? "text-slate-500 font-semibold" : "px-3",
          ].join(" ")}>
          {item.Name}
        </NavLink>
      )}
    </li>
  );
};

const Menubar = () => {
  const menu = useSelector(selectedCurMenu);
  const depthLevel = 0;
  return (
    <ul className='space-y-5 p-3'>
      {menu.map((row, index) => {
        return (
          <MenuItem
            item={row}
            key={row.Menu_id}
            depthLevel={depthLevel}
          />
        );
      })}
    </ul>
  );
};

export default Menubar;
