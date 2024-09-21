// import { motion } from "framer-motion";

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
// import { StarsCanvas } from "./canvas";
// import { profile} from "../assets";
import {
  // logocolor, 
  logonobackground} from "../../public/assets";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-hero-pattern `}>
      <div className=' bg-black  flex flex-col'>
        <div
          className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div className="mb-10">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I&apos;m <span className='text-[#ff5ef2] opacity-100 animate-pulse'>Valentine</span>
              <span className='text-[#915EFF] opacity-100 ml-2'>Ampah</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am a full-stack developer, with keen interest in building 
              secured,<br className='xs:block hidden' />robust and scalable big data solutions and 
              web applications <br className='xs:block hidden' />leveraging the power of cloud computing.
            </p>
            <div className="absolute right-0 bottom-0 flex justify-center items-center bg-cover w-full h-[300px]">
              
              <img 
                src={logonobackground} 
                alt='hero' 
                className=' absolote bottom-5 w-[400px] h-[300px] object-contain'
              />
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;