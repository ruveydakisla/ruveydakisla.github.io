"use client";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import Image from "next/image";
import React from "react";
import GlowCard from "./glow-card";

export default function ProjectCard({ project, handleModal }) {
  const description =
    project.description.length > 40
      ? project.description.slice(0, 40) + "..."
      : project.description;

  return (
    <button onClick={handleModal}>
      <GlowCard borderColor={"border-green-500"}>
        <div className="bg-disappearing-purple px-4 hover:grayscale-0 hhover:transition-all hover:duration-300 border-primary-icon flex rounded-xl flex-col w-80 h-60 justify-between items-center">
          <div className="flex-1 flex w-full rounded-lg items-center justify-center">
            <div className="text-gray-200 text-center text-lg">
              {project.name}
            </div>
          </div>
          <div className="flex-1 mx-4 flex bg-primary-bg rounded-lg p-2 items-center w-full gap-x-2">
            <Image
            alt="icon"
              className="w-12 h-12 hover:skew-y-12 hover:translate-x-2 hover:transition-all hover:duration-300"
              src={require(`../../public/icons/${project.project_icon}.png`)}
            />
            <div className="text-gray-200">{description}</div>
          </div>
          <div className="flex-1 flex flex-row w-full justify-center gap-x-4">
            {project.techs.map((tech, index) => (
              <Image
              alt="icon"
                key={index}
                className="w-6 hover:animate-none animate-bounce hover:duration-300"
                src={require(`../../public/icons/${tech}.svg`)}
              />
            ))}
          </div>
        </div>
      </GlowCard>
    </button>
  );
}
