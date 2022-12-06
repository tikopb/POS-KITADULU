import React, { useState, useEffect, useLayoutEffect } from "react";
import logo from "../images/logo.png";
import ReactDom from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { apiDoLogout } from "../store/authSlice";
import { useSelector } from "react-redux";
import { selectedCurUser } from "../store/authSlice";
import Menubar from "./Menubar";

const Sidebar = ({ visible, close, logoutHandler }) => {
  const user = useSelector(selectedCurUser);

  return (
    <div
      className={`bg-[#F7F7F7] rounded-r-md border border-gray-300 w-3/5 fixed top-0 bottom-0 left-0 overflow-y-auto ${
        visible ? "-translate-x-0" : "-translate-x-full"
      } ease-in-out duration-300`}>
      <div className='grid grid-rows-[3em_10em_auto_1fr]'>
        <div
          className='flex justify-between p-3 bg-#F7F7F7] top-0'
          onClick={close}>
          <p className='flex-1 text-center font-semibold'>Navigation</p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </div>
        <div className='bg-gradient-to-r from-[#99AAE5] to-[#29DDDD] flex flex-col justify-center items-center'>
          <div>gambar</div>
          <p className='font-bold text-lg tracking-wider'>
            {user?.name.toUpperCase()}
          </p>
        </div>

        <Menubar />
      </div>
    </div>
  );
};

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const logoutHandler = () => {
    dispatch(apiDoLogout());
    navigate("/");
  };

  const onCloseSidebarHandler = () => {
    setBurgerClass("burger-bar unclicked");
    setIsMenuClicked((prev) => !prev);
  };

  const updateHamburgerMenu = () => {
    console.log("Asd");
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
    } else {
      setBurgerClass("burger-bar unclicked");
    }

    setIsMenuClicked((prev) => !prev);
  };

  return (
    <nav className='bg-base-100 navbar border-2 border-b-blue-500 justify-between fixed top-0 inset-x-0 shadow-lg'>
      <div
        className='burger-menu md:hidden'
        onClick={updateHamburgerMenu}>
        <div className={burgerClass} />
        <div className={burgerClass} />
        <div className={burgerClass} />
      </div>

      <div className=''>
        <Link className='btn btn-ghost normal-case text-xl w-24 md:w-32 '>
          <img
            src={logo}
            alt={"POS WIS"}
            className='w-full object-cover'
          />
        </Link>
      </div>
      <div className='hidden md:block flex-none gap-2'>
        <div className='dropdown dropdown-end'>
          <label
            tabIndex={0}
            className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img
                src='https://placeimg.com/80/80/people'
                alt='people user'
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'>
            <li>
              <Link
                to='#'
                onClick={logoutHandler}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {ReactDom.createPortal(
        <Sidebar
          close={onCloseSidebarHandler}
          logoutHandler={logoutHandler}
          visible={isMenuClicked}
        />,
        document.getElementById("root_modal"),
      )}
    </nav>
  );
};

export default Header;
