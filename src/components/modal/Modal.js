import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { getDimensions } from "../../hooks/dimensions";
import { motion, AnimatePresence, 	usePresence, } from "framer-motion";
import  Overlay  from '../overlay/Overlay';
import Carousel from "../img-carousel/Carousel";
import styles from '../modal/modal.module.css'


export default function Modal({ href, layoutId, onClick, projTitle, onClickRepo, projectImg }) {
  const carry = dynamic(() => import('../img-carousel/Carousel'));
    const ref = useRef(null);
  	const [isPresent, safeToRemove] = usePresence();
    const { height, width } = getDimensions(ref);
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
          
              <motion.div ref={ref} className={styles.pic} custom={height }><Carousel projectImg={projectImg} /></motion.div>
         
            <motion.button 
              className={styles.btnMod}
              onClick={onClick}
              type='button'
              // value={} 
            >
              Close
            </motion.button>
            <Link href={href} passHref legacyBehavior >
            <motion.a 
              className={styles.btnMod}
              onClick={onClickRepo}
            >
             Repo
            </motion.a>
            </Link>
          </motion.div>
     </Overlay>
    
    </AnimatePresence>
    </>
  )
}