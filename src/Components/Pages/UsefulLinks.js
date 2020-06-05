import React from "react";
import { links } from "./Links";

const UsefulLinks = () => {
  return (
    <div className="page relative h-full" style={{ minWidth: "1000px" }}>
      <div className="w-full flex flex-col items-center">
      <iframe
            width="840"
            height="472.5"
            src="https://www.youtube.com/embed/vfxpmgzfsvA"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />

        <div className="text-center karla text-4xl font-semibold flex-1 my-2 ">
          Useful Links
        </div>
        {links.map((item) => (
          <div className="w-1/2 rounded shadow m-4 p-4 bg-gray-100">
            <a href={item.link} target="_blank">
              <p className="text-xl font-semibold hover:text-green-500">
                {item.name}
              </p>
            </a>
            {item.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsefulLinks;
