import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AboutHead, AboutEd, AboutBag, AboutSkills } from "../components/AboutLayout";
import styles from '../styles/about.module.css';


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

          <AnimatePresence key={'education'}> 
            <motion.div className={styles.box}>{school ? <AboutEd /> : null}</motion.div>
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

          <AnimatePresence key={'skills'}> 
            <motion.div className={styles.box}>{showSkills ? <AboutSkills /> : null}</motion.div>
          </AnimatePresence>
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

              <AnimatePresence key={'util'}> 
                <motion.div className={styles.box}>{showBag ? <AboutBag /> : null}</motion.div>
              </AnimatePresence>
          </div>
    </div>
  );
};
export default AboutPage;