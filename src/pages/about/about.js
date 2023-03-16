import React, { useState } from "react";
import { ABOUT_DATA } from "../../data/static-data";
import { AnimatePresence, motion } from "framer-motion";
import { AboutSkills, AboutLink } from "./layout";
import { DropDownBtn } from "../../components/buttons/Buttons";
import styles from './about.module.css';

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
  const [show, setShow] = useState(null);
  const [showSkills, setShowSkills] = useState(ABOUT_DATA);
  const [isOpen, setIsOpen] = useState(false);  

  const clickHandler = (t) => {
      showSkills.map((data) => {
        if (data.id === t.target.id) {
          setShow(data)
          return data;
        } else {
          return show;
        }
      })
    };

    const clearHandler = (i) => {
      setShow(null)
      setIsOpen(!isOpen)
    };

  return (
    <div className={styles.container}>

      <motion.div 
        className={styles.dropDownAndDetails}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >

        <motion.nav
          className={styles.dropDownList}
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >

          <DropDownBtn
            id={showSkills.length}
            value={showSkills.length}
            className={styles.dropDownBtn}
            onClick={clearHandler}
            fillRule={isOpen ? "open" : "closed"}
          />
      
            <motion.ul
              className={styles.ul}
              style={{ pointerEvents: isOpen ? "auto" : "none" }}
              variants={{
                open: {
                  clipPath: "inset(0% 0% 0% 0% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.05
                  }
                },
                closed: {
                  clipPath: "inset(10% 50% 90% 50% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3
                  }
                }
              }}
            >

              <AboutLink 
                onClick={clickHandler} 
              />

            </motion.ul>
        </motion.nav>

          {isOpen && show ?
              <AnimatePresence  key={show.title} onExitComplete> 
                <motion.div className={styles.box} initial='hidden' animate='visible' exit={{opacity: 0,}} variants={aboutVariants} >
                  <AboutSkills
                    id={show.id}
                    key={`${show.title}-${show.id}`}
                    headOne={show.edu.title} 
                    headTwo={show.edu2.title} 
                    headThree={show.edu3.title} 
                    headFour={show.edu4.title}
	                  liOne={show.edu.school} 
                    liTwo={show.edu2.school} 
                    liThree={show.edu3.school} 
                    liFour={show.edu4.school}
	                  lastOne={show.edu.date}
                    lastTwo={show.edu2.date}
                    lastThree={show.edu3.date}
                    lastFour={show.edu4.date}
                  />
                </motion.div>
              </AnimatePresence>
              :
              null
          }  

      </motion.div>
    </div>
    
  );
};
export default AboutPage;