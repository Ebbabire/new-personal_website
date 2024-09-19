import alibo from "../public/assets/projects/alibo.png";
import iconScholar from "../public/assets/projects/iconScholar.png";
import iconScholarweb from "../public/assets/projects/iconScholarweb.png";
import mechal from "../public/assets/projects/mechal.png";
import wezader from "../public/assets/projects/wezader.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  const projects = [
    {
      name: "Icon Scholar Academy | Admin Panel",
      img1: iconScholar,
      liveLink: "iconScholarAdmin",
      frameworks: [
        "React",
        "TailwindCSS",
        "Material UI",
        "TypeScript",
        "React Router",
      ],
      tech: "Next Js",
      projectUrl: "iconScholarAdmin",
    },
    {
      name: "Icon Scholar Academy",
      img1: iconScholarweb,
      liveLink: "https://iconscholar.com/",
      frameworks: [
        "React",
        "TailwindCSS",
        "Material UI",
        "TypeScript",
        "React Router",
      ],
      tech: "Next Js",
      projectUrl: "iconScholar",
    },
    {
      name: "Mechal Sport club | Admin Panel",
      img1: mechal,
      liveLink: "/",
      frameworks: [
        "React",
        "TailwindCSS",
        "Material UI",
        "TypeScript",
        "React Router",
      ],
      tech: "React Js",
      projectUrl: "mechal",
    },
    {
      name: "Wezader | Admin Panel",
      img1: wezader,
      liveLink: "https://beitrent.netlify.app/",
      liveLink: "https://wezader-admin.netlify.app/",
      frameworks: [
        "React",
        "TailwindCSS",
        "Material UI",
        "TypeScript",
        "React Router",
      ],
      tech: "React Js",
      projectUrl: "wezader",
    },
    {
      name: "Alibo",
      img1: alibo,
      liveLink: "alibo",
      frameworks: ["React", "TailwindCSS", "JSON server", "JSON auth"],
      tech: "React Js",
      projectUrl: "alibo",
    },
  ];

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 flex flex-col items-center justify-center pb-20 pt-32">
        <p className="text-2xl font-semibold text-center tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectItem key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
