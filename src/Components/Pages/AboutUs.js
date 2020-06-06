import React from 'react';

const AboutUs = () => {
  return (
    <div className="w-screen h-full relative">
      <div className="page bg-opacity-50 bg-cover bg-yellow-200 bg-fixed h-64 flex items-center" >
        <div className="text-center karla text-4xl font-semibold flex-1 ">
          About Us :)</div>
      </div>
      <div className="text-center karla text-3xl font-normal" >
        We are a group of students who wish to make a difference</div>
      <div className="flex flex-row items-center">
        <div className="flex-1">
          IMAGE HERE
        </div>
        <div className="flex-1">
          Who we are
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
