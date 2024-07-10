"use client";
import Typingcomponent from "@/components/typing-component";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
async function getGitProfile() {
  const res = await fetch(`https://api.github.com/users/ruveydakisla`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

export default function Home() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getGitProfile();
      setProfile(data);
    }

    fetchData();
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }
  return (
    <div className="">
      <section className="relative  flex flex-col items-center justify-between md:pt-20  md:h-[80vh]">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:gap-12 gap-y-8">
          <div className="flex flex-col items-start justify-center rounded-lg p-3 lg:py-5 lg:px-12 bg-primary-bg h-full">
            <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
              Hello, <br />
              This is
              <span className=" text-pink-500"> Ruveyda Kışla</span>
              {` , I'm a  `}
              <span className="text-white mt-2 mb-8 text-center font-normal flex-1 text-lg flex w-full items-center justify-center">
                <Typingcomponent />
              </span>
            </h1>
            <div className="w-full flex justify-center items-center gap-5">
              <Link
                href={profile.html_url}
                target="_blank"
                className="transition-all text-teal-500 hover:scale-125 duration-300"
              >
                <BsGithub size={24} />
              </Link>
              <Link
                href={profile.blog}
                target="_blank"
                className="transition-all text-teal-500 hover:scale-125 duration-300"
              >
                <BsLinkedin size={24} />
              </Link>
            </div>

            <div className="w-full justify-center flex items-center gap-6 mt-10">
              <Link
                target="_blank"
                href={"userData.resume"}
                className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
              >
                <button className="px-3 text-xs md:px-4 py-2 md:py-2.5 bg-primary-bg rounded-full border-none text-center font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                  <span>
                    <Link
                      target="_blank"
                      href={
                        "https://drive.google.com/file/d/1sqG8nVQUST6hYtywJWGdlSz5b2fDux4y/view"
                      }
                    >
                      Get Resume
                    </Link>
                  </span>
                  <MdDownload size={16} />
                </button>
              </Link>
              <Link
                target="_blank"
                href={"userData.resume"}
                className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
              >
                <button className="px-3 text-xs md:px-4 py-2 md:py-2.5 bg-primary-bg rounded-full border-none text-center font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                  <span>
                    <Link href="/#contact">Get Contact</Link>
                  </span>
                  <RiContactsFill size={16} />
                </button>
              </Link>
            </div>
          </div>

          <div className="h-full from-[#382039] border-[#EFE1D1] relative rounded-lg border bg-gradient-to-r to-[#5A3D5C]">
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
            <div className="overflow-hidden border-t-[2px] border-[#EFE1D1] px-4 lg:px-8 py-4 lg:py-8">
              <code className="font-mono text-xs md:text-sm lg:text-base">
                <div className="blink">
                  <span className="mr-2 text-pink-400">const</span>
                  <span className="mr-2 text-violet-400">coder</span>
                  <span className="mr-2 text-pink-400">=</span>
                  <span className="text-gray-400">{"{"}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                  <span className="text-gray-400">{`'`}</span>
                  <span className="text-green-400">{profile.name}</span>
                  <span className="text-gray-400">{`',`}</span>
                </div>

                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">
                    location:
                  </span>
                  <span className="text-gray-400">{`'`}</span>
                  <span className="text-green-400">Isparta, Türkiye</span>
                  <span className="text-gray-400">{`',`}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">
                    hardWorker:
                  </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">
                    quickLearner:
                  </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">
                    problemSolver:
                  </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="ml-4 lg:ml-8 mr-2">
                  <span className=" text-white">skills:</span>
                  <span className="text-gray-400">{`['`}</span>
                  <span className="text-amber-300">React</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">NextJS</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Redux</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">React Native</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Flutter</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Asp.Net</span>
                  <span className="text-gray-400">{"'],"}</span>
                </div>

                <div>
                  <span className="text-gray-400">{`};`}</span>
                </div>
              </code>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
