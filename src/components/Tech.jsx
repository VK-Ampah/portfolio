import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies,cloudtech,programming } from "../constants";
import { styles } from "../styles";


const Tech = () => {
  return (
    <div>
      <h2 className={`${styles.sectionHeadText} text-center mb-10`}>
          Tech Stack
      </h2>
      <div className='flex flex-row flex-wrap justify-center gap-5'>
        {technologies.map((technology) => (
          <div className='w-12 h-12' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      {/* <p className={`${styles.sectionHeadText} text-center mb-10`}>
          Cloud 
      </p> */}

      <div className='flex flex-row flex-wrap justify-center gap-5'>
        {cloudtech.map((technology) => (
          <div className='w-12 h-12' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      <div className='flex flex-row flex-wrap justify-center gap-5'>
        {programming.map((technology) => (
          <div className='w-12 h-12' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default SectionWrapper(Tech, "tech");