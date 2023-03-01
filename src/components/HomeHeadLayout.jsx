import Image from 'next/image'
import { useRef } from "react";
import { motion, useInView, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css';

import beamUp from '../../public/beam.png';
import stickOne from '../../public/stick-1.png';
import stickLay from '../../public/stick-lay.png'
import stickHold from '../../public/stick-hold.png'
import stickReach from '../../public/stick-reach.png'
import moShip from '../../public/mother-ship.png'
import bulb from '../../public/bulb-half.png'
import textPic from '../../public/text.png'
import plant from '../../public/plant-no-bg.png'


function useParallax(value = useMotionValue(0), distance) {
 
  return useTransform( value, [0, 1], [-distance, distance]);
}


export const HomeHead = () => {
        const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

    const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, -220);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

	return (
<div className={styles.imgSet} ref={ref}>
      <motion.div className={styles.beamShip}>
            <Image
              src={beamUp}
              alt={'beam'}
              height={120}
              width={120}
            />
            </motion.div>
              <motion.div style={{y}} className={styles.stickOne}>
                <Image
                  src={stickOne}
                  alt='stick-one'
                  height={60}
                  width={60}
                />
              </motion.div>


      <motion.div style={{y}} className={styles.stickLay}>
            <Image
              src={stickLay}
              alt='ryan'
              height={60}
              width={60}
            />
            </motion.div>
      <motion.div style={{y}} className={styles.stickHold}>
            <Image
              src={stickHold}
              alt='stickHold'
              height={60}
              width={60}
            />
            </motion.div>
              <motion.div className={styles.stickReach}>
            <Image
              src={stickReach}
              alt='Nooooooooooo'
              height={60}
              width={60}
            />
            </motion.div>

              {/* <motion.div style={{y}} className={styles.stickTwo}>
            <Image
              src={'/../public/stick-2.png'}
              height={200}
              width={200}
            />
            </motion.div> */}
      <motion.div style={{y}} className={styles.motherShip}>
            <Image
              src={moShip}
              alt='Mother ship'
              height={200}
              width={200}
              style={{}}
            />
            </motion.div>
        <Image  
            className={styles.imgCenter}
            src={bulb}
            alt='Bulb' 
            height={-200} 
            width={600} 
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 2s"
            }}
          />
      
          <Image  
            className={styles.imgText}
            src={textPic} 
            alt='Header Text'
            height={400} 
            width={400} 
            style={{
              transform: isInView ? "none" : "translateY(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}

          />
          <Image  
            className={styles.img}
            src={plant} 
            alt='Red Plant'
            height={400} 
            width={600}
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
            }} 
          />
        
          
     </div> 
	
	);
};