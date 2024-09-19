import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ebba Birhanu | Lead Web Developer</title>
        <meta
          name="description"
          content="Experienced in creating user-focused, high-performance websites and applications. I specialize in building admin dashboard panels, leading teams to deliver functional and visually appealing digital solutions."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
