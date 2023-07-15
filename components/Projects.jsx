import codebookTab from "../public/assets/projects/codebook-home_tabView.png";
import codebookHome from "../public/assets/projects/codebook-home_page.jpg";
import codebookMobile from "../public/assets/projects/codebook-home_mobileView.png";
import natoursHome from "../public/assets/projects/natours-home_page.png";
import natoursTab from "../public/assets/projects/natour-home_tab.png";
import natoursMobile from "../public/assets/projects/natours-home_mobile.png";
import githubHome from "../public/assets/projects/githubFinder-home.png";
import githubMobile from "../public/assets/projects/githubFinder-mobile.png";
import githubTab from "../public/assets/projects/githubFinder-tab.png";
import portfolioHome from "../public/assets/projects/portfolio-home.png";
import portfolioMobile from "../public/assets/projects/portfolio-mobile.png";
import portfolioTab from "../public/assets/projects/portfolio-tab.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const projects = [
    {
      name: "Codebook",
      img1: codebookHome,
      img2: codebookTab,
      img3: codebookMobile,
      gitLink: "https://github.com/Ebbabire/codebook",
      liveLink: "https://codebook-ebba.netlify.app/",
      frameworks: ["React", "TailwindCSS", "JSON server", "JSON auth"],
      tech: "React Js",
      projectUrl: "codebook",
    },
    {
      name: "Github Finder",
      img1: githubHome,
      img2: githubTab,
      img3: githubMobile,
      gitLink: "https://github.com/Ebbabire/github_finder",
      liveLink: "https://github-finder-ebba.netlify.app/",
      frameworks: ["React", "TailwindCSS", "GitHub API"],
      tech: "React Js",
      projectUrl: "github",
    },

    {
      name: "Portfolio Site",
      img1: portfolioHome,
      img2: portfolioTab,
      img3: portfolioMobile,
      frameworks: ["React", "TailwindCSS"],
      tech: "Next Js",
      projectUrl: "portfolio",
    },
    {
      name: "Natours",
      img1: natoursHome,
      img2: natoursTab,
      img3: natoursMobile,
      gitLink: "https://github.com/Ebbabire/Natours",
      liveLink: "https://natours-ebba.netlify.app/",
      frameworks: ["Html", "Sass", "CSS"],
      tech: "SASS",
      projectUrl: "natours",
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
            <ProjectItem key={project.title} project={project} />
          ))}
          {/* <ProjectItem
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
            tech="React JS"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
            tech="React JS"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            tech="React JS"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="Next JS"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
