import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import alligator from "./../../images/alligator.jpg";
import SearchBar from "./SearchBar";
import CommonCases from "./CommonCases"

export class LandingPage extends Component {
  render() { 
    return (
      <div className="page relative h-full" style={{minWidth: '1000px'}}>
        <div className="flex flex-row items-center justify-center mt-12 ml-48">
          <div className="absolute -ml-156 h-132 w-132 bg-red-500 rounded-full z-0" />
          <div className="max-w-7xls py-2 text-left p-4 z-10">
            <p className="uppercase font-semibold tracking-widest leading-tight karla text-5xl text-black">
              Still clueless <br />about what <br />case suits yours most?
            </p>
          </div>
          <div className="z-10" >
            <img src={alligator} alt="cute alligator picture" />
          </div>
        </div>
        <div className="w-full -mt-12 pt-4 flex justify-center ">
          <HashLink to="#common-cases">
            <button className="uppercase bg-green-700 tracking-xl font-bold text-base
                text-white p-4 rounded-full shadow-lg hover:bg-green-600 mt-12" >
              Let Us Help You!
            </button>
          </HashLink>
        </div>
        <CommonCases />
        <SearchBar />
      </div>
    );
  }
}

export default LandingPage;
