import Image from 'next/image'
import React, { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, useMotionValue, useTime } from "framer-motion";
import { XVelocity } from '../../animations/scroll/XaxisInfinite.jsx';
import { Galaxy, AstroBoy, UfoAbduction, Dip, SmBbVg, Stars, BbVg, } from '../../animations/svg/HeaderSvgs.js';
import { Barry, Zapped } from '../../animations/svg/Characters.js';
import { SaveTheEarthBtn } from '../buttons/Buttons.jsx';
import styles from './homehead.module.css';

// Images
import moShip from '../../../public/spaceships/mother-ship.png';
import sat from '../../../public/spaceships/sat-two.png';
import stickOne from '../../../public/sticks/stick-1.png';
import stickLay from '../../../public/sticks/stick-lay.png';
import stickHold from '../../../public/sticks/stick-hold.png';
import stickReach from '../../../public/sticks/stick-reach.png';
import cow from '../../../public/sticks/cow.png';




function useParallax(value = useMotionValue(0), distance) {
  return useTransform( value, [0, 1], [-distance, distance]);
};


export const HomeHead = () => {
  // values
  const scrollRef = useRef(null);
  const [show ,setShow] = useState(false);
  const value = useMotionValue(0);
  const time = useTime();

  // position/instance
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  const isInView = useInView(scrollRef, { once: false });
  
  // scroll
  const { scrollYProgress, scrollXProgress, scrollY } = useScroll();
  const y = useParallax(scrollYProgress, -220);
  const satY = useParallax(scrollYProgress, 150);


  console.log(scrollRef)


	return (
    <div ref={scrollRef} className={styles.headWrap}  > 

      <div className={styles.container}>
      
          
          <SaveTheEarthBtn  onClick={() => setShow(!show)}/>
             {show &&
          <Barry /> 
              }
         

     
    </div>
  
           
      
      

    {/* ------satellite */}
    <motion.div style={{ satY }} className={styles.sat}>
      <XVelocity baseVelocity={-4} _element={   
        <Image
          className={styles.satImg}
          src={sat}
          alt={'sat'}
          height={80}
          width={80}
        />   
      }/>
    </motion.div>

    {/*-----------spaceship-------------- */}

    {/* <motion.div style={{y}} className={styles.motherShip}>
      <Image
        src={moShip}
        alt={'Mother Ship'}
        className={styles.motherImg}
        height={180}
        width={180}
        priority
      />
    </motion.div> */}

{/* 
    <motion.div className={styles.gal} >

      <Galaxy />
      
    </motion.div>

    <motion.div className={styles.dip} >

      <Dip/>
      
    </motion.div> */}
  
    

     
      
  
    
    {/* ----------sticks-------------- */}


    {/* <motion.div style={{y}} className={styles.stickOne}>
      <Image
        src={stickOne}
        alt='stick-one'
        className={styles.stickImg}
        height={60}
        width={60}
      />
    </motion.div>
            
    <motion.div style={{y}} className={styles.stickLay}>
      <Image
        src={stickLay}
        alt='ryan'
        className={styles.stickImg}
        height={60}
        width={60}
      />
    </motion.div>
    
    <motion.div style={{ y }} className={styles.stickHold}>
      <Image
        src={stickHold}
        alt='stickHold'
        className={styles.stickImg}
        height={60}
        width={60}
      />
    </motion.div>

    <motion.div className={styles.stickReach}>
      <Image
        src={stickReach}
        alt='Nooooooooooo'
        className={styles.stickImg}
        height={60}
        width={60}
      />
    </motion.div > 

    <motion.div style={{y, rotate}} className={styles.cow}>
      <Image
        src={cow}
        alt='cow'
        height={100}
        width={100}
      />
    </motion.div> */}


    {/* ---------------abduction---------------- */}
    <motion.div style={{y}} className={styles.abduct}>
      <UfoAbduction  />
    </motion.div>

    
     {/* ----------------astro---------------- */}

      {/* <motion.div className={styles.astro} >
        {show &&
        <AstroBoy />
  
        }
      </motion.div> */}

     {/* ----------------zappeddd---------------- */}


      {/* <motion.div  className={styles.zap} >
        <Zapped />
      </motion.div>

      
      <motion.div  className={styles.bigBuild}>
        <BbVg />
      </motion.div>

      <motion.div  className={styles.building}>
        <SmBbVg />
      </motion.div>   */}
    
      
    </div> 
	
	);
};