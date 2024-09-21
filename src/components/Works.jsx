/* eslint-disable react/prop-types */
// import {Tilt} from "react-tilt";
// import { motion } from "framer-motion";

import { styles } from "../styles";
// import { github,url } from "../assets";
// import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";

import ProjectCard from "./ProjectCard";



const Works = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}> */}
        {/* <p className={`${styles.sectionSubText} `}>My work</p> */}
        <h2 className={`${styles.sectionHeadText}`}>My Projects</h2>
      {/* </motion.div> */}

      <div className='w-full flex'>
        <p
         
          className='mt-3 text-slate-200 text-[15px] max-w-3xl leading-[30px]'
        >
        My portfolio showcases full-stack applications and big data processing 
        projects using SQL/NoSQL databases such as MongoDB, PostgreSQL, and MySQL, 
        along with languages like JavaScript, TypeScript, Java, Python and 
        runtime environments like Node.js. I have worked with frameworks including
         React, Next.js, Express, and Spring Boot, building search engines, 
         REST API&apos;s, data pipelines, and web applications. 
         I also leverage cloud platforms like AWS, Azure, and Google Cloud, 
         as well as CI/CD tools such as Docker. Each project includes a 
         description and source code link, highlighting my technical versatility 
         and problem-solving skills.
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
           <div key= {project.name} onClick={() => window.open(project.source_code_link, "_blank")}
              className='cursor-pointer'
            >
              <ProjectCard key={`project-${index}`} index={index} {...project} />
          </div>

        ))}
      </div>
    </>
  );
};

// // const WrappedWorks = SectionWrapper(Works, "project");
// export default WrappedWorks;

export default Works;