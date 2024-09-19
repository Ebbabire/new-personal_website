import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/profile.png";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex flex-col items-center justify-center"
    >
      <p className="text-2xl font-semibold text-center tracking-widest uppercase text-[#5651e5] mb-10">
        About
      </p>
      <div className="max-w-[1240px] mx-auto flex flex-col items-center justify-center lg:flex-row lg:gap-11">
        <div className="lg:w-3/5 px-6">
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            As an experienced Lead Web Developer, I specialize in crafting
            seamless and user-friendly websites and applications. With a robust
            background in front-end development, I focus on turning complex
            ideas into functional, visually appealing, and efficient digital
            solutions. From design to deployment, I lead development teams in
            delivering high-quality web products that meet both business goals
            and user needs. My work combines modern technologies, creative
            problem-solving, and a user-first approach to ensure a smooth and
            engaging online experience.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-1/2  mb-5 lg:w-2/5 shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
