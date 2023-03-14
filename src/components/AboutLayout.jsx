import React, { useEffect, useRef } from "react";
import { usePresence, motion } from "framer-motion";
import styles from '../styles/about.module.css'

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

	const aboutLits = {
    hidden: { opacity: 0, x: '-1vw' },
    visible: {
        opacity: 1, x: 0,
        transition: { 
          type: 'spring', 
          delay: .4, 
          velocity: 2, 
          damping: 10, 
        },
		 exit: { 
      y: '-1vw',
      transition: { ease: 'easeInOut' }
     }
		

    }
	};





export const AboutEd = () => {
	const ref = useRef(null);
  	const [isPresent, safeToRemove] = usePresence();

	useEffect(() => {
    	!isPresent && ref.current == { opacity: 0 },
        	() => safeToRemove;
    }, [isPresent, safeToRemove]);



	return (
		<motion.div className={styles.listStack} ref={ref}>
			<motion.ul>
				<motion.li 
					className={styles.listItems}
					initial='hidden' 
					animate='visible' 
					variants={aboutLits}
					exit='exit'
				>
					<motion.div className={styles.listItems}>Bachelors Degree in Audio Engineering</motion.div>
					<motion.div className={styles.listItems}>New England Institute of Art</motion.div>
					<motion.div className={styles.listItems}>2010-2013</motion.div>
				</motion.li>
				<motion.li 
					className={styles.listItems} 
					initial='hidden' 
					animate='visible' 
					variants={aboutVariants}
				>
					<div className={styles.listItems}>Software Engineering Certificate</div>
					<div className={styles.listItems}>Springboard Academy</div>
					<div className={styles.listItems}>2021-2022</div>
				</motion.li>
				<motion.li 
					className={styles.listItems}
					initial='hidden' 
					animate='visible' 
					variants={yVariants}
				>
					<div className={styles.listItems}>React Native Advanced Topics</div>
					<div className={styles.listItems}>Udemy Academy</div>
					<div className={styles.listItems}>2023</div>
				</motion.li>
				<motion.li
					className={styles.listItems}
					initial='hidden' 
					animate='visible' 
					variants={yVariants}
				>
					<div className={styles.listItems}>React Native A Practical Guide</div>
					<div className={styles.listItems}>Udemy Academy</div>
					<div className={styles.listItems}>2023</div>
				</motion.li>
			</motion.ul>
		</motion.div>
	);
};

export const AboutSkills = () => {
	const ref = useRef(null);
  	const [isPresent, safeToRemove] = usePresence();

	useEffect(() => {
    	!isPresent && ref.current == { opacity: 0 },
        	() => safeToRemove;
    }, [isPresent, safeToRemove]);


	return (
		<motion.div  className={styles.listStack} ref={ref}>
			<motion.ul>
				<motion.li 
					className={styles.listItems}
					initial='hidden' 
					animate='visible' 
					variants={aboutVariants}
				>
					<div className={styles.listItems}>Full Stack Developer</div>
					<div className={styles.listItems}>Custom templates</div>
					<div className={styles.listItems}>Server integration</div>
				</motion.li>
				<motion.li 
					className={styles.listItems}
					initial='hidden' 
					animate='visible' 
					variants={aboutVariants}
				>
					<div className={styles.listItems}>Object Oriented Programming</div>
					<div className={styles.listItems}>Strong handle on data structures</div>
					<div className={styles.listItems}>Experience various types</div>
				</motion.li>
				<motion.li 
					className={styles.listItems}
					initial='hidden' 
					animate='visible' 
					variants={yVariants}
				>
					<div className={styles.listItems}>SQL & NoSQL Database</div>
					<div className={styles.listItems}>PostgeSQL SQLite</div>
					<div className={styles.listItems}>Realm & Firebase</div>
				</motion.li>
				<motion.li 
					className={styles.listItems}
					initial='hidden' 
					animate='visible' 
					variants={yVariants}
				>
					<div className={styles.listItems}>Full CRUD API Architecture</div>
					<div className={styles.listItems}>Custom built API's</div>
					<div className={styles.listItems}>Strong navigation through third party API's</div>
				</motion.li>
				<motion.li 
					className={styles.listItems}
					initial='hidden' 
					animate='visible' 
					variants={yVariants}
				>
					<div className={styles.listItems}>Platform Specific Code</div>
					<div className={styles.listItems}>Experience with web, iOS & Android</div>
				</motion.li>
			</motion.ul>
		</motion.div>
	);
};

export const AboutBag = () => {
	const ref = useRef(null);
  	const [isPresent, safeToRemove] = usePresence();

	useEffect(() => {
    	!isPresent && ref.current == { opacity: 0 },
        	() => safeToRemove;
    }, [isPresent, safeToRemove]);


	return (
		<motion.div className={styles.listStack} 
			initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{ delay: .4, duration: 1.2, }} 
			ref={ref}
		>
			<ul>
				<li className={styles.listItems}>
					<div className={styles.listItems}>Javascript</div>
					<div className={styles.listItems}>React</div>
					<div className={styles.listItems}>Next.js</div>
				</li>
				<li className={styles.listItems}>
					<div className={styles.listItems}>Mobile Development</div>
					<div className={styles.listItems}>React Native</div>
					<div className={styles.listItems}>Swift & Java</div>
				</li>
				<li className={styles.listItems}>
					<div className={styles.listItems}>Database</div>
					<div className={styles.listItems}>Architecture & Maintenance</div>
					<div className={styles.listItems}>Navigation & Queries</div>
				</li>
				<li className={styles.listItems}>
					<div className={styles.listItems}>Adobe Products</div>
					<div className={styles.listItems}>Adobe XD</div>
					<div className={styles.listItems}>Photoshop & Lightroom</div>
				</li>
			</ul>
		</motion.div>
	);
};

