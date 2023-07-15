import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { SocialIcon } from "react-social-icons";

const ProjectItem = ({ project }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={project.img1}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {project.name}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{project.tech}</p>
        <Link href={project.projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
    // <div className="flex h-[100%] w-full flex-shrink-0 snap-center flex-col items-center justify-center overflow-y-hidde">
    //   <div className="relative mb-20 h-[8rem] sm:mb-24 sm:h-[12rem]">
    //     {/* <Image
    //       src={project.img1}
    //       alt=""
    //       className="mt-10 h-full rounded-xl border-[6px] border-black object-top"
    //     /> */}
    //     {/* <div className="absolute left-2 top-12 flex h-[8rem] w-[95%] items-center justify-center gap-5 rounded-xl bg-white opacity-0 transition-all duration-300 hover:opacity-80 sm:h-[11rem]">
    //       <div className="flex flex-col items-center justify-center">
    //         <SocialIcon
    //           url={project.gitLink}
    //           style={{ height: 85, width: 85 }}
    //           fgColor="black"
    //           bgColor="transparent"
    //         />
    //         <h4>CODE</h4>
    //       </div>
    //       <div className="flex flex-col items-center justify-center">
    //         <SocialIcon
    //           url={project.liveLink}
    //           style={{ height: 85, width: 85 }}
    //           fgColor="black"
    //           bgColor="transparent"
    //         />
    //         <h4>LIVE</h4>
    //       </div>
    //     </div> */}
    //     <Image
    //       src={project.img2}
    //       alt=""
    //       className="absolute -right-5 top-0 h-[4rem] rounded-md border-4 border-black object-cover sm:-right-12 sm:top-36 sm:h-[6rem]"
    //     />
    //     <Image
    //       src={project.img3}
    //       alt=""
    //       className="absolute -left-3 top-24 h-[5rem] w-12 rounded-sm border-2 border-black object-cover sm:-left-5 sm:top-28 sm:h-[8rem] sm:w-16"
    //     />
    //   </div>
    //   {/* <div className="relative flex flex-col items-center justify-center gap-y-6 sm:w-[80%] md:w-[80%] lg:w-[70%] xl:w-[40%]">
    //     <h3 className="text-xl font-semibold tracking-widest text-[#cfcccc]">
    //       {project.name}
    //     </h3>
    //     <div className="flex gap-x-4">
    //       {project.frameworks.map((framework, idx) => (
    //         <span
    //           className="rounded-md bg-orange-500 px-4 py-1 font-semibold text-black"
    //           key={idx}
    //         >
    //           {framework}
    //         </span>
    //       ))}
    //     </div>
    //   </div> */}
    // </div>
  );
};

export default ProjectItem;
