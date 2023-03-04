import Image from 'next/image'
import { useRef } from "react";
import { motion, useInView, useScroll, useSpring, useTransform, useMotionValue, useTime, easeInOut, easeIn } from "framer-motion";
import { PositiveVelocity, NegativeVelocity } from '../AboutLayout';
import styles from '../../styles/Home.module.css';

// Images
// ships
import beamUp from '../../../public/beam.png';
import moShip from '../../../public/mother-ship.png'
import sat from '../../../public/spaceships/sat-two.png'
import building from '../../../public/planet/building.png'
import bigBuild from '../../../public/planet/big-build.png'
import astro from '../../../public/planet/astro.png'


import stickOne from '../../../public/stick-1.png';
import stickLay from '../../../public/stick-lay.png'
import stickHold from '../../../public/stick-hold.png'
import stickReach from '../../../public/stick-reach.png'
import cow from '../../../public/cow.png'


function useParallax(value = useMotionValue(0), distance) {
  return useTransform( value, [0, 1], [-distance, distance]);
}



export const HomeHead = () => {

const aboutVariants = {
    hidden: { opacity: 0, y: '-140vw', x:'100vh'   },
    visible: {
        opacity: 1, y: 0, x:0,
        transition: { 
        
          delay: .4, 
          duration: 4, 
          
        },
		

    }
};



  const ref = useRef(null);
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  const isInView = useInView(ref, { once: false });
  const { scrollYProgress, scrollXProgress, scrollY } = useScroll({target: ref});
  const y = useParallax(scrollYProgress, -220);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    velocity: 20,
    restDelta: 0.001
  });


	return (
    <div className={styles.headWrap} >
    <motion.div style={{width: '100%', height: '100%', zIndex: -1, }}>
      <PositiveVelocity baseVelocity={-4} _element={
                
        <Image
          src={sat}
          alt={'beam'}
          height={80}
          width={80}
        />
               
      }/>
    </motion.div>
      <motion.div className={styles.beamShip}>
            <Image
              src={beamUp}
              alt={'beam'}
              height={180}
              width={180}
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
      <motion.div style={{ y }} className={styles.stickHold}>
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

          <motion.div style={{y, rotate}} className={styles.cow}>
            <Image
              src={cow}
              height={100}
              width={100}
            />
            </motion.div>
      <motion.div style={{y}} className={styles.motherShip}>
            <Image
              src={moShip}
              alt='Mother ship'
              height={200}
              width={200}
            />
            </motion.div>
      <motion.div  className={styles.astro}  initial='hidden' animate='visible' 
      variants={aboutVariants} 
      
      >
            <Image 
              src={astro}
              alt='astroid'
              height={200}
              width={200}
            />
          </motion.div>
      <motion.div  className={styles.building}>
            <Image
              src={building}
              alt='big building'
              height={200}
              width={200}
            />
            </motion.div>
      <motion.div  
      className={styles.bigBuild}
      
      >
            <Image
              src={bigBuild}
              alt='building'
              height={400}
              width={400}
            />
            </motion.div>
        {/* <Image  
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
          /> */}
      
          {/* <Image  
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

          /> */}
       {/* <div className={styles.imgSet} ref={ref}>
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
        </div>  */}
          
     </div> 
	
	);
};