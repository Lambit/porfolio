import Image from 'next/image';
import React, { useRef } from 'react';
import { getDimensions } from '../../hooks/dimensions';
import Link from 'next/link';
import { motion, useScroll, useCycle } from 'framer-motion';
import { VarianceVelocity } from '../../animations/scroll/XaxisInfinite';
import styles from './nav.module.css';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};


const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const sidebarHeightRef = useRef(null);
  const { height } = getDimensions(sidebarHeightRef);

  return (
    <>
    
    <motion.nav 
      className={styles.burg}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={sidebarHeightRef}
    >

      <motion.div className={styles.sideNav} variants={sidebar}/>

      <button className={styles.btn} onClick={() => toggleOpen()}>
        <svg width="30" height="30" viewBox="-4 -6 30 30">
          <motion.path 
            strokeWidth="3" 
            stroke="#66ffb2" 
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" }
            }}
          />
          <motion.path 
            strokeWidth="3" 
            stroke="#66ffb2" 
            strokeLinecap="round"
            d= "M 2 2.5 L 20 2.5 , M 2 9.423 L 20 9.423 , M 2 16.346 L 20 16.346"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
          />
          <motion.path 
            strokeWidth="3" 
            stroke="#66ffb2" 
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" }
            }}
          />
        </svg>
      </button>
    </motion.nav>
  
        
        <motion.nav className={styles.nav}>
          <VarianceVelocity 
            baseVelocity={9}
            _element={<div >Full Stack Developer</div>}
          /> 
         

      </motion.nav>
</>
  );
};

export default Navbar;