import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import {textVariant } from "../utils/motion";


const Tech = () => {
  return (
    <>
   <motion.div className=" flex justify-center " variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>My Tech Stack</h2>
      </motion.div>

     <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>

  );
};

export default SectionWrapper(Tech, "tech");