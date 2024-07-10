"use client";
import Image from "next/image";
import React from "react";

import { personalData } from "../../../utils/data/persona-data";
async function getGitProfile() {
  const res = await fetch(`https://api.github.com/users/ruveydakisla`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}
export default async function About() {
  const profile = await getGitProfile();
  return (
    <div id="about" className=" my-12 relative">
      <div className="flex justify-center my-5 mb-20 lg:py-8">
        <div className="flex  md:justify-center w-full items-center">
          <span className="w-1/2 md:w-48 h-[1px] bg-[#AD88C6]"></span>
          <span className="bg-primary-bg w-fit text-white p-2 px-5 text-xl rounded-md border border-[#AD88C6]">
            About Me
          </span>
          <span className="w-1/2 md:w-48 h-[1px] bg-[#AD88C6]"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#AD88C6] text-xl uppercase">
            Who I am?
          </p>
          <p className=" text-base text-gray-300  ">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={profile.avatar_url}
            width={280}
            height={280}
            alt="Ruveyda Kışla"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
