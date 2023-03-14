import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AboutEd, AboutBag, AboutSkills } from "../components/AboutLayout";
import styles from '../styles/about.module.css';

const aboutVariants = {
    hidden: { opacity: 0, y: '-1vw' },
    visible: {
        opacity: 1, y: 0,
        transition: { 
          type: 'spring', 
          delay: .4, 
          velocity: 6, 
          damping: 10,    
        },
    }, 
      exit: { 
        x: '-100vw',
        transition: { ease: 'easeInOut' }
     }
};


const AboutPage = () => {
  const [school, setSchool] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showBag, setShowBag] = useState(false);
  
  return (
    <div className={styles.container}>
      <div className={styles.listStack}>
        <motion.button
          className={styles.button}
          whileHover={{scale: 1.2,}}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSchool(!school)}
        >
          {school ? "Hide" : "Education"}

        </motion.button>
       
            <AnimatePresence key={'education'} onExitComplete> 
               {school &&
              <motion.div  className={styles.box} initial='hidden' animate='visible' variants={aboutVariants} exit='exit' >
                 <AboutEd />
              </motion.div>
              }
            </AnimatePresence> 

      </div>

     
     
        <div className={styles.listStack}>
          <motion.button
            className={styles.button}
            whileHover={{scale: 1.2,}}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowSkills(!showSkills)}
          >
            {showSkills ? "Hide" : "Skills"}

          </motion.button>

          {showSkills ? 
            <AnimatePresence key={'skills'}> 
              <motion.div className={styles.box} initial='hidden' animate='visible' exit={{opacity: 0,}} variants={aboutVariants} >
                <AboutSkills /> 
              </motion.div>
            </AnimatePresence>
          : null}
        </div>

     
          <div className={styles.listStack}>
            <motion.button
              className={styles.button}
              whileHover={{scale: 1.2,}}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowBag(!showBag)}
            >
              {showBag ? "Hide" : "Utility Bag"}

            </motion.button>
              {showBag ? 
                <AnimatePresence key={'util'}> 
                  <motion.div className={styles.box} initial='hidden' animate='visible' exit='exit' variants={aboutVariants}>
                    <AboutBag /> 
                  </motion.div>
                </AnimatePresence>
              : null}
          </div>
    </div>
  );
};
export default AboutPage;