import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LinkedInIcon } from './../images/LIicon.svg';
import { ReactComponent as TelegramIcon } from './../images/Teleicon.svg';
import { ReactComponent as FacebookIcon } from './../images/FBicon.svg';
import { ReactComponent as InstagramIcon } from './../images/IGicon.svg';

function FooterComp() {
    return (
      <footer className="w-screen h-22 justify-start fixed bottom-0 z-10 px-6 pt-2">
        <div className="social-media mx-auto pt-2 w-screen px-2">
          <ul className="flex">
            <li className="px-1">
              <LinkedInIcon />
            </li>
            <li className="px-1">
              <TelegramIcon />
            </li>
            <li className="px-1">
              <FacebookIcon />
            </li>
            <li className="px-1">
              <InstagramIcon />
            </li>
          </ul>
        </div>
        <div className="contact-info text-sm mx-auto pt-2 pb-3 px-2 text-black">
          <ul className="flex w-screen">
            <Link to="/">
              <li className="px-2 uppercase opacity-70">Terms of Use&nbsp;&nbsp;&nbsp;&nbsp;|</li>
            </Link>
            <Link to="/">
              <li className="px-2 uppercase opacity-70">Contact Us&nbsp;&nbsp;&nbsp;&nbsp;|</li>
            </Link>
            <Link to="/">
              <li className="px-2 uppercase opacity-70">FAQ</li>
            </Link>
          </ul>
        </div>
      </footer>
    );
}

export default FooterComp;
