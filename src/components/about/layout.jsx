import React, { useEffect, useRef } from "react";
import { ABOUT_DATA } from "../../data/static-data";
import { usePresence, motion } from "framer-motion";
import styles from './about.module.css';

	const aboutVariants = {
    	hidden: { opacity: 0, x: '1vw'   },
    	visible: { 
			opacity: 1, x: 0,
			transition:{
				delay: 1,
				type: 'spring', 
          		velocity: 2, 
          		damping: 10,  
				duration: 1.2
			},
		}
	};

	const yVariants = {
    	hidden: { opacity: 0, y: '1vw'   },
    	visible: { 
			opacity: 1, y: 0,
			transition:{
				delay: 1.3,
				type: 'spring', 
          		damping: 10,  
			},
		}
	};

	const itemVariants = {
  		open: {
    		opacity: 1,
    		y: 0,
    	transition: { type: "spring", stiffness: 300, damping: 24 }
  		},
  		closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
	};

export const AboutLink = ({ onClick }) => {
	return (
		<>
			{ABOUT_DATA.map((a, indx) => (
				<motion.li 
        			className={styles.li}
					key={`${indx}-${a.id}`} 
					id={a.id}
        			variants={itemVariants}
        			whileHover={{ backgroundColor: 'rgb(128, 0, 128)', color:'rgb(255, 69, 0)', opacity: .7}}
        			whileTap={{scale: 0.97, originY:0}}
        			whileFocus={{backgroundColor: 'rgb(128, 0, 128)', color:'rgb(255, 69, 0)', opacity: .7}}
        			onClick={onClick}  
					type='button'
					value={a.id} 
	
        		>
        			{a.title} 
        		</motion.li>
			))}
		</>
	);
};


export const AboutSkills = (
	{ 
		id, headOne, headTwo, headThree, headFour,
		liOne, liTwo, liThree, liFour,
		lastOne, lastTwo, lastThree, lastFour
	}
	) => {

		const ref = useRef(null);
  		const [isPresent, safeToRemove] = usePresence();

		useEffect(() => {
    		!isPresent && ref.current == { opacity: 0 },
    	    	() => safeToRemove;
    	}, [isPresent, safeToRemove]);


		return (
			<motion.div  className={styles.listStack} ref={ref} id={id}>
				<motion.ul>
					<motion.li 
						className={styles.listItems}
						initial='hidden' 
						animate='visible' 
						variants={aboutVariants}
					>
						<div className={styles.listItems}>{headOne}</div>
						<div className={styles.listItems}>{liOne}</div>
						<div className={styles.listItems}>{lastOne}</div>
					</motion.li>

					<motion.li 
						className={styles.listItems}
						initial='hidden' 
						animate='visible' 
						variants={aboutVariants}
					>
						<div className={styles.listItems}>{headTwo}</div>
						<div className={styles.listItems}>{liTwo}</div>
						<div className={styles.listItems}>{lastTwo}</div>
					</motion.li>

					<motion.li 
						className={styles.listItems}
						initial='hidden' 
						animate='visible' 
						variants={yVariants}
					>
						<div className={styles.listItems}>{headThree}</div>
						<div className={styles.listItems}>{liThree}</div>
						<div className={styles.listItems}>{lastThree}</div>
					</motion.li>

					<motion.li 
						className={styles.listItems}
						initial='hidden' 
						animate='visible' 
						variants={yVariants}
					>
						<div className={styles.listItems}>{headFour}</div>
						<div className={styles.listItems}>{liFour}</div>
						<div className={styles.listItems}>{lastFour}</div>
					</motion.li>
				</motion.ul>
			</motion.div>
		);
};



