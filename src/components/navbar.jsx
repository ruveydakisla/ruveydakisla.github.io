import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-transparent hidden md:block">
      <div className="flex  items-center justify-between  py-5  ">
        <div className="text-primary-icon text-2xl flex flex-shrink-0 px-4  items-center opacity-0 md:opacity-100">
         RUVEYDA KIŞLA
        </div>
        <ul className="flex  h-screen max-h-0 w-full flex-col items-start md:mt-0 md:h-auto md:max-h-screen md:flex-row md:w-auto md:space-x-4 md:opacity-100 md:border-0">
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#about"
            >
              <div className="text-sm uppercase text-primary-icon transition-colors  duration-300 underline-offset-8 hover:underline hover:duration-200 hover:transition-all hover:scale-125">
                About
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#education"
            >
              <div className=" uppercase text-sm text-primary-icon transition-colors duration-300 underline-offset-8 hover:underline hover:duration-200 hover:transition-all hover:scale-125">
                Education
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="uppercase block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#experience"
            >
              <div className="text-sm uppercase text-primary-icon transition-colors duration-300 underline-offset-8 hover:underline hover:duration-200 hover:transition-all hover:scale-125">
                Experience
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#projects"
            >
              <div className="uppercase text-sm text-primary-icon transition-colors hover:duration-200 hover:transition-all hover:scale-125 underline-offset-8 hover:underline  ">
                Projects
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#skills"
            >
              <div className="uppercase text-md text-primary-icon transition-colors underline-offset-8 duration-300 hover:underline hover:duration-200 hover:transition-all hover:scale-125">
                Skills
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
{
  /* <div className='bg-red-300 h-[15vh] flex justify-end space-x-12 px-8 items-center w-full'>
<Link href="/#about">About</Link>
<Link href="/#education">Education</Link>
<Link  href="/#experience">Experience</Link>
<Link href="/#projects">Projects</Link>
<Link href="/#skills">Skills</Link>
</div> */
}
