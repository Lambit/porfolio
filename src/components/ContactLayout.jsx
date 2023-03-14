import React from "react";
import { motion } from "framer-motion";
import { Wave } from '../animations/svg/LogosAndIcons.js';
import styles from '../styles/contact.module.css'


export const ContactHead = () => {

	return (
		<div className={styles.container}>
        	<div className={styles.font}>Contact</div>
         		<motion.div 
					className={styles.wave}
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


    