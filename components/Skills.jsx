import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import Sass from "../public/assets/skills/sass-1.svg";
import Git from "../public/assets/skills/git-icon.svg";
import Redux from "../public/assets/skills/redux.svg";
import Material from "../public/assets/skills/material-ui.svg";
import Vite from "../public/assets/skills/vitejs.svg";
import SkillItem from "./SkillItem";

const Skills = () => {
  const skills = [
    { name: "Html", img: Html },
    { name: "CSS", img: Css },
    { name: "JavaScript", img: Javascript },
    { name: "React", img: ReactImg },
    { name: "NextJs", img: NextJS },
    { name: "SASS", img: Sass },
    { name: "Tailwind", img: Tailwind },
    { name: "Redux", img: Redux },
    { name: "Github", img: Github },
    { name: "Git", img: Git },
    { name: "Firebase", img: Firebase },
    { name: "Material UI", img: Material },
    { name: "ViteJs", img: Vite },
  ];
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-2xl font-semibold text-center tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <SkillItem key={skill.name} name={skill.name} img={skill.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
