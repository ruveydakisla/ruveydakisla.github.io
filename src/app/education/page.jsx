// @flow strict
import Image from "next/image";

import { BsPersonWorkspace } from "react-icons/bs";
import { AnimationLottie } from "@/components/animation-lottie";
import GlowCard from "@/components/glow-card";
import lottieFile from "/public/lottie.json";

function Education() {
  const education = {
    id: 1,
    duration: "2020-2024",
    title: "Bachelors Degree",
    institution: "Celal Bayar University",
  };
  return (
    <div
      id="education"
      className="relative z-50  border-t my-32 lg:my-24 border-[#25213b]"
    >
      <div className="flex justify-center my-5 mb-20 lg:py-8">
        <div className="flex  md:justify-center w-full items-center">
          <span className="w-1/2 md:w-48 h-[1px] bg-pink-500"></span>
          <span className="bg-primary-bg w-fit text-white p-2 px-5 text-xl rounded-md border border-pink-500">
            Educations
          </span>
          <span className="w-1/2 md:w-48 h-[1px] bg-pink-500"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                <GlowCard
                  borderColor={"border-pink-500 "}
                  key={education.id}
                  identifier={`education-${education.id}`}
                >
                  <div className="p-3  bg-[#5C5470] rounded-xl to-[#AAD7D9] border-pink-600  text-white">
                    <div className="flex justify-center">
                      <p className="text-xs text-[#16f2b3] sm:text-sm ">
                        {education.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-pink-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base text-white sm:text-xl mb-2 font-medium uppercase">
                          {education.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {education.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
