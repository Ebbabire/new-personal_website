import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Ebba | Resume</title>
        <meta
          name="description"
          content="I’m a lead web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto px-4 py-2 pt-[120px]">
        <h2 className="text-center mb-12">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Ebba Birhanu</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/ebba-birhanu/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn
                size={20}
                style={{ marginRight: "1rem" }}
                className="hover:scale-110"
              />
            </a>
            <a
              href="https://github.com/Ebbabire"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={20}
                style={{ marginRight: "1rem" }}
                className="hover:scale-110"
              />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Leadership <span className="px-1">|</span> Web Development
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p className="mb-8">
          <span className="block mb-2">
            I build frontend systems that don’t break under pressure, clean,
            fast, and built to scale.
          </span>
          <span className="block mb-2">
            {" "}
            I specialize in React, Next.js, TypeScript, and Tailwind CSS. I’ve
            led frontend projects where performance mattered, the user
            experience had to be smooth, and deadlines were tight. I know how to
            build things that not only look great but stay maintainable over
            time.
          </span>
          <span className="block mb-2">
            {" "}
            My approach is straightforward: clear communication, reliable
            delivery, and clean code. I write components that are easy to work
            with, optimize for both user and developer experience (DX), and
            focus on performance from day one.
          </span>{" "}
          <span className="block mb-2">
            {" "}
            I’ve worked on corporate websites, admin dashboards, and product UIs
            — from scratch builds to complex refactors. I’ve also collaborated
            directly with backend teams, handled API integrations, and optimized
            apps using SSR, lazy loading, and code splitting.
          </span>{" "}
          <span className="block mb-2">
            My background in mechanical engineering gives me a systems mindset —
            I think about how everything fits together, not just individual
            features.
          </span>{" "}
          <span className="block mb-2">
            If you’re looking for a frontend developer who can work
            independently, communicate clearly, and ship production-ready
            results — let’s talk.
          </span>
        </p>

        {/* Skills */}
        <div className="text-center py-4 mb-12 ">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2 flex items-center justify-center mx-auto gap-y-4 flex-wrap ">
            {/* <span className="font-bold">Technical Skills</span> */}
            {/* <span className="px-2"></span>Front-End Web Developer */}
            <span className="px-2 flex items-center border-l-2 border-black w-fit">
              HTML
            </span>
            <span className="px-2 flex items-center border-l-2 border-black w-fit">
              CSS
            </span>
            <span className="px-2 flex items-center border-l-2 border-black w-fit">
              JavaScript
            </span>
            <span className="px-2 flex items-center border-l-2 border-black w-fit">
              TypeScript
            </span>
            <span className="px-2 flex items-center border-l-2 border-black w-fit">
              React
            </span>
            <span className="px-2 flex items-center border-l-2 border-black w-fit">
              Next.JS
            </span>
            <span className="px-2 flex items-center border-l-2 border-black w-fit">
              Tilwind CSS
            </span>
            <span className="px-2 flex items-center border-l-2 border-black w-fit">
              Shadcn UI
            </span>
            <span className="px-2 flex items-center border-l-2 border-black w-fit">
              Redux
            </span>
            <span className="px-2 flex items-center border-l-2 border-black w-fit">
              Git
            </span>
            <span className="px-2 flex items-center border-l-2 border-black w-fit">
              SASS
            </span>
            <span className="px-2 flex items-center border-l-2 border-black w-fit">
              Firebase
            </span>
            <span className="px-2 flex items-center border-l-2 border-black w-fit">
              ViteJs
            </span>
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Qemer Software Technology</span>
            <span className="px-2">|</span>Addis Ababa, ET
          </p>
          <p className="py-1 italic">Lead Web Developer</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Built a modular frontend setup using React, Next.js, and
              TypeScript that cut our page load time by about 30% and helped
              keep users around longer.
            </li>
            <li>
              Set up standards for how we write and organize our frontend code,
              which helped reduce bugs and made the code easier to maintain.
            </li>
            <li>
              Worked on performance improvements like lazy loading and
              optimizing server-side rendering to keep the UI smooth and quick.
            </li>
            <li>
              Organized and prioritized work across the team to keep projects
              moving and meet deadlines.
            </li>
            <li>
              Mentored several developers, helping them write better code and
              improve testing practices.
            </li>
            <li>
              Regularly meet with clients and stakeholders to gather feedback
              and adjust plans so we build the right features.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
