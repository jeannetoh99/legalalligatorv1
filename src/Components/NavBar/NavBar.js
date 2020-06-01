import React, { useState } from "react";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";
import alligatorhead from "./../../images/alligatorhead.jpg"
import DrawerComponent from "./Drawer";
import { ReactComponent as LightBulb } from '../../images/light-bulb.svg';

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  
  return (
    <nav className="w-full h-auto p-6 top-0 z-10 bg-white fixed" style={{minWidth: '1000px'}}>
      <div className="pt-4 text-center block lg-xl:inline-block lg-xl:float-right lg-xl:pt-8">
        <ul className="flex justify-center inline mb-0 text-gray-600 lg-xl:justify-end items-center">
          <Link to="/">
            <div className="flex items-center mx-8 hover:text-green-500">
              <div className="h-24 w-24 mx-4 rounded-full shadow-focus overflow-hidden">
                <img src={alligatorhead} className="mt-2" style={{height: 90, objectFit:"cover"}}/>
              </div>
              <h1 className="text-4xl karla font-semibold">Legal Alligator</h1>
            </div>
          </Link>
          <Link to="/About">
            <NavButton name="About Us" />
          </Link>
          {/*<Link to="/Actions">
            <NavButton name="Possible Actions" />
          </Link>*/}
          <Link to="/Useful-Links">
            <NavButton name="Useful Links" />
          </Link>
          <Link to="/Glossary">
            <NavButton name="Glossary" />
          </Link>
          {/* DRAWER COMPONENT */}
          <div class="mr-2 float-right" aria-label="Open Menu" onClick={() => toggleDrawer()}>
            <svg
              fill="black"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-8 h-8 m-2 pb-2 hover:text-red"
            >
          {/* <path d="M4 6h16M4 12h16M4 18h16"></path> */}
          <LightBulb fill="white"/>
          </svg>
      </div>
        </ul>
       
      </div>
      <DrawerComponent openDrawer={openDrawer}/>
    </nav>
  );
}

export default NavBar;
