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
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
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
          Analytical, innovative, and motivated web development professional
          with experience in team leadership, and organizational effectiveness
          in fast-paced and challenging environments. Adept at developing
          strategies and driving streamlined operations. Diverse analytical
          skills, team collaboration, and relationship building. Consummate
          professional, and motivated leader, with solid interpersonal abilities
          and complex problem-solving skills. Effective and proven track record
          of critical thinking, idea generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4 mb-12">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>SASS
            <span className="px-2">|</span>Tilwind CSS
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Git
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> ViteJs
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">YOT TECH</span>
            <span className="px-2">|</span>Addis Ababa, ET
          </p>
          <p className="py-1 italic">Front End Web Developer</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed my Knowledge of JavaScript frameworks and libraries like
              React and Next to create rich interactive content.
            </li>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Mentored interns, managed project milestones, and collaborated
              with seniors to overcome challenges.
            </li>
            <li>
              Debugged web applications using React Developer Tools and Chrome
              Developer Console, improving work quality and ensuring optimal
              performance and user satisfaction.
            </li>
            <li>
              Engaged in weekly Tech team meetings to strategize and enhance
              work efficiency for ongoing and upcoming projects.
            </li>
            <li>
              Shadowed senior developers on large projects and learned how to
              use tool like SASS for CSS development.
            </li>
            <li>
              Helped the team by testing code across multiple browsers to ensure
              it worked well and provided the best user experience.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
