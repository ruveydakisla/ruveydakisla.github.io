"use strict";

import React, { useEffect } from "react";
//data example: {name:"ruveyda",properties:[{key:"ad",value:"ruveyda"},{key:"soyad",value:"kışla"}]}
export default function CodeCard({ data }) {
  useEffect(() => {
    console.log(data);
  });
  return (
    <div className="h-full from-[#200F21] border-primary-border relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-5">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-orange-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
        </div>
      </div>
      <div>
        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
          <code className="font-mono text-xs md:text-sm lg:text-base">
            <div className="blink">
              <span className="mr-2 text-pink-400">const</span>
              <span className="mr-2 text-violet-400">{data.name}</span>
              <span className="mr-2 text-pink-400">=</span>
              <span className="text-gray-400">{"{"}</span>
            </div>

            {data.properties.map((property, index) => (
              <div key={index}>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  {property.key}:
                </span>

                <span className="text-gray-400">{`'`}</span>
                <span className="text-green-400  ">{property.value}</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
            ))}

            <div>
              <span className="text-gray-400">{`};`}</span>
            </div>
          </code>
        </div>
      </div>
    </div>
  );
}
