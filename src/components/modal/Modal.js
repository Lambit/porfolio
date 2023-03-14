import dynamic from "next/dynamic";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, 	usePresence, } from "framer-motion";
import  Overlay  from '../overlay/Overlay';
import Carousel from "../img-carousel/Carousel";
import styles from '../modal/modal.module.css'



export default function Modal({ imgBtn, layoutId, onClick, projTitle }) {
  const carry = dynamic(() => import('../img-carousel/Carousel'));
    const ref = useRef(null);
  	const [isPresent, safeToRemove] = usePresence();
    const modal = {
        visible: { 
          opacity: 1,
          y: '30vh',
          transition: { delay: .5 }
        },
        hidden: { 
          y: '0vh', 
          opacity: 0 
        }
    };


    useEffect(() => {
    	!isPresent && ref.current == { opacity: 0 },
        	() => safeToRemove;
    }, [isPresent, safeToRemove]);
    
  return (

    <>
    <AnimatePresence  onExitComplete={() => {setShowModal(false)}}   >

          <Overlay>
          <motion.div 
            ref={ref}
            layoutId={layoutId}
            className={styles.boxMode}
            variants={modal}
            initial='hidden' 
            animate='visible' 
            exit='hidden'
          >
            <motion.div className={styles.font}>{projTitle}</motion.div>
          
              {/* <Carousel /> */}
         
            <motion.button 
              className={styles.btnMod}
              onClick={onClick}
              type='button'
              // value={} 
            >
              Images
            </motion.button>
            <motion.button 
              className={styles.btnMod}
              onClick={onClick} 
            >
              Repo
            </motion.button>
          </motion.div>
     </Overlay>
    
    </AnimatePresence>
    </>
  )
}