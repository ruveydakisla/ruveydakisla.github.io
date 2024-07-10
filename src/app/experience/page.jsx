// @flow strict

import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { AnimationLottie } from "@/components/animation-lottie";
import GlowCard from "@/components/glow-card";
import experience from "/public/code.json";
import { experiences } from "../../../utils/data/experiences";

function Experience() {
  return (
    <div
      id="experience"
      className="relative z-50 border-t  border-[#25213b]"
    >
      <div className="flex justify-center   lg:py-8">
        <div className="flex  items-center w-full md:justify-center">
          <span className="md:w-48 h-[1px] w-1/2 bg-orange-500"></span>
          <span className="border border-orange-500 w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-1/2 md:w-48 h-[1px] bg-orange-500"></span>
        </div>
      </div>

      <div className="py-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {experiences.map((experience) => (
                <GlowCard
                  borderColor={"border-orange-500"}
                  key={experience.id}
                  identifier={`experience-${experience.id}`}
                >
                  <div className="p-3 relative bg-[#5C5470]  rounded-xl">
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {experience.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-orange-500  transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {experience.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
