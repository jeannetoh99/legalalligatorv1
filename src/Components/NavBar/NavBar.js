import React, { useState } from "react";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";
import alligatorhead from "./../../images/alligatorhead.jpg"
import DrawerComponent from "./Drawer";

const NavBar = (props) => {
  
  return (
    <nav className="w-full flex" style={{minWidth: '1000px'}}>
      <div>
        <div className="py-4 text-center block lg-xl:inline-block lg-xl:float-right lg-xl:pt-8 fixed w-full bg-white z-20">
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
          </ul>
        </div>
      </div>
      <DrawerComponent/>
    </nav>
  );
}

export default NavBar;
