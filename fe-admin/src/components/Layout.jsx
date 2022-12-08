import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";
import { selectedCurToken } from "../store/authSlice";
import Menubar from "./Menubar";

const Layout = () => {
  const currToken = useSelector(selectedCurToken);
  if (currToken)
    return (
      <React.Fragment>
        <Header />
        <aside className='bg-white  hidden lg:block fixed left-2 top-20 bottom-2 rounded-lg shadow-lg overflow-y-auto box-content p-2 border-gray-200 border right-[82%]'>
          <Menubar />
        </aside>

        <div className='pt-20 lg:pl-80 pl-3 w-full'>
          <Outlet />
        </div>
      </React.Fragment>
    );
  else return <Outlet />;
};

export default Layout;
