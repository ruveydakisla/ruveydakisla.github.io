import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsGithub } from "react-icons/bs";

const CustomModal = ({ handleModal, isOpen, project }) => {
  const [animate, setAnimate] = useState("");

  useEffect(() => {
    if (isOpen) {
      setAnimate("animate-modal-open");
    } else {
      setAnimate("animate-modal-close");
    }
  }, [isOpen]);

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 ${
          isOpen ? "backdrop-blur-sm" : ""
        } flex justify-center items-center`}
      >
        <div
          className={`max-w-[1000px] border-green-500 border max-h-[600px] shadow-lg py-2 rounded-md ${animate}`}
          onAnimationEnd={() => !isOpen && setAnimate("")}
        >
          <div className="flex flex-row justify-between ">
            <div className="text-xl font-medium flex-row text-gray-200 text-center   py-4  pl-8  ">
              {project.name}
            </div>
            <div className="text-lg font-medium text-gray-200 text-center  py-3 px-4 ">
              <button
                type="button"
                className="h-8 px-2 text-sm rounded-md "
                onClick={handleModal}
              >
                <Image
                  className="text-white w-8"
                  src={require("../../public/icons/close.svg")}
                />
              </button>
            </div>
          </div>

          <div className="px-8 py-4 flex flex-row justify-between text-sm  text-gray-300 h-full rounded-lg">
            <div>
              <div>
                <p className="text-gray-100 pt-8">Subject:</p>
                <p className="text-sm font-medium text-gray-300  py-4">
                  {project.description}
                </p>
                <p className="text-white pt-4">Features:</p>
                <ol className="list-disc ">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ol>
                <div className="flex py-4 flex-row space-x-5 w-full justify-center">
                  {project.techs.map((tech, index) => (
                    <Image
                      key={index}
                      className="w-8"
                      src={require(`../../public/icons/${tech}.svg`)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {project.image && (
              <Image
                style={{ objectFit: "contain" }}
                className="md:block hidden w-40 "
                src={require(`../../public/${project.image}.png`)}
              />
            )}
          </div>
          <div className=" flex justify-between items-center px-4 pt-2 pb-2">
            <Link href={project.url}>
              <BsGithub className="text-white text-xl hover:scale-110  hover:text-violet-500 hover:transition-all hover:duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
