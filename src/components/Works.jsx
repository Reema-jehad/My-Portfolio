import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";



const Works = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>
      <div className="w-full flex">
        <p
          
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Below are some of the key projects I've completed, showcasing my
          ability to use a wide range of technologies including HTML, CSS,
          JavaScript, React, Bootstrap, Tailwind, Sass, and TypeScript.
        </p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
