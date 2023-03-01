import Image from 'next/image'
import { useRef } from "react";
import { motion, useInView, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'


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
              src={'/../public/beam.png'}
              height={120}
              width={120}
            />
            </motion.div>
              <motion.div style={{y}} className={styles.stickOne}>
                <Image
                  src={'/../public/stick-1.png'}
                  height={60}
                  width={60}
                />
              </motion.div>


      <motion.div style={{y}} className={styles.stickLay}>
            <Image
              src={'/../public/stick-lay.png'}
              height={60}
              width={60}
            />
            </motion.div>
      <motion.div style={{y}} className={styles.stickHold}>
            <Image
              src={'/../public/stick-hold.png'}
              height={60}
              width={60}
            />
            </motion.div>
              <motion.div className={styles.stickReach}>
            <Image
              src={'/../public/stick-reach.png'}
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
              src={'/../public/mother-ship.png'}
              height={200}
              width={200}
              style={{}}
            />
            </motion.div>
        <Image  
            className={styles.imgCenter}
            src={'/../public/bulb-half.png'} 
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
            src={'/../public/text.png'} 
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
            src={'/../public/plant-no-bg.png'} 
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