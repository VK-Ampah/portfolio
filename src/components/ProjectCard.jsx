import { github,url } from "../../public/assets";
/* eslint-disable react/prop-types */
// import {Tilt} from "react-tilt";
// import { motion } from "framer-motion";
// import { fadeIn } from "../utils/motion";

const ProjectCard = ({
  // index,
  name,
  description,
  tags,
  image,
  source_code_link,
  github_link,
}) => {
  return (
    // <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    //   <Tilt
    //     options={{
    //       max: 45,
    //       scale: 1,
    //       speed: 450,
    //     }}
    //     className=' p-5 text-black rounded-2xl sm:w-[360px] w-full border'
    //   >
        <div  className=' p-5 text-black rounded-2xl sm:w-[360px] w-full border'>
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl border'
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(github_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-1'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-4/4 h-4/4 object-contain animate-bounce'
                />
              </div>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={url}
                  alt='Live Url'
                  className='w-4/4 h-4/4 object-contain animate-spin'
                />
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-white text-[14px]'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
    
  );
};

export default ProjectCard;