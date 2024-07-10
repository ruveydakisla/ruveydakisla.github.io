"use client";
import CodeCard from "@/components/codeCard";
import CustomModal from "@/components/modal";
import ProjectCard from "@/components/project-card";
import ProjectCodeCard from "@/components/project-code-card";
import React, { useState } from "react";
import { projects } from "../../../utils/data/projects";

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState();

  const handleModal = (project) => {
    setSelected(project);
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div
      id="projects"
      className="relative z-50  border-t my-28 lg:my-24 border-[#25213b]"
    >
      <div className="flex justify-center my-5 mb-8 lg:py-8">
        <div className="flex  md:justify-center w-full items-center">
          <span className="w-1/2 md:w-48 h-[1px] bg-green-500"></span>
          <span className="bg-primary-bg w-fit text-primary-icon p-2 px-5 text-xl rounded-md border border-green-500">
            Projects
          </span>
          <span className="w-1/2 md:w-48 h-[1px] bg-green-500"></span>
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2 my-12 justify-items-center md:gap-y-12 gap-y-4">
        {projects.map((project, index) => (
          <>
            <ProjectCard
              key={index}
              handleModal={() => handleModal(project)}
              project={project}
            />
          </>
        ))}
        {isModalOpen && (
          <CustomModal
            project={selected}
            handleModal={handleModal}
            isOpen={isModalOpen}
          />
        )}
      
      </div>
    </div>
  );
}
