import React, { useEffect, useRef } from "react";
import { useTime, useTransform, motion } from "framer-motion";
import { Wave, GitHoob, PdRez, Twit, Linkdin } from "../components/svgs/SvgAnimations";
import styles from '../styles/contact.module.css'



export const ContactHead = () => {
	const ref = useRef(null);
  	const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false }); 

	return (
		<div className={styles.container}>
        	<div className={styles.font}>Contact</div>
         		<motion.div 
         		 animate={{ rotate:[ 12, -20] }}
         		 transition={
         		   { 
         		     repeat: Infinity, repeatType: "reverse", repeatDelay: 2
         		   }
         		 }
         		> 
         			<Wave />
        		</motion.div>

    	</div>
	);
};
export const SocialIconSet = () => {
	const ref = useRef(null);
  	const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false }); 

	return (
		<div className={styles.icons}>
        	  
        <motion.button
          className={styles.iconBtn}
          whileHover={{scale: 1.2,}}
          whileTap={{ scale: 0.95, rotateZ: '360deg' }}
        > 
			<Twit />
          <Link href={'https://twitter.com/Lucas_Lydon'}>Twitter</Link>
        </motion.button>

        <motion.button 
          className={styles.button}
          whileHover={{scale: 1.2,}}
          whileTap={{ scale: 0.95 }}
          > 
		  	<Linkdin />
            <Link href={'https://www.linkedin.com/in/lucas-lambert-5748601ab/'}>LinkedIn</Link>
          </motion.button>

        <motion.button 
          className={styles.button}
          whileHover={{scale: 1.2,}}
          whileTap={{ scale: 0.95 }}
        > 
			<GitHoob />
          <Link href={'https://github.com/Lambit'}>Github</Link>
        </motion.button>  

        <motion.button 
          className={styles.button}
          whileHover={{scale: 1.2,}}
          whileTap={{ scale: 0.95 }}
        > 
			<PdRez />
          <Link href={'https://github.com/Lambit'}>Github</Link>
        </motion.button>     
      </div>

    
	);
};
    