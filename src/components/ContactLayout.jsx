import React, { useEffect, useRef } from "react";
import { useTime, useTransform } from "framer-motion";
import styles from '../styles/contact.module.css'



export const WavingHand = () => {
	const ref = useRef(null);
  	const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false }); 

	return (
		<div className={styles.listStack} ref={ref}>
		    <div className={styles.listItems}>Bachelors Degree in Audio Engineering</div>		
		</div>
	);
};
    