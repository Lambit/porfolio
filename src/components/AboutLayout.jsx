import React, { useEffect, useRef } from "react";
import Image from 'next/image'
import { usePresence } from "framer-motion";
import styles from '../styles/about.module.css'




export const AboutHead = () => {

	return (
		<div className={styles.container}>
			
		<div className={styles.font}>Lucas Lambert</div>
            <Image
              src={'/../public/a-contact.png'}
			  alt='hi'
              height={160}
              width={160}
            />
              </div> 
	
	);
};

export const AboutEd = () => {
	const ref = useRef(null);
  	const [isPresent, safeToRemove] = usePresence();

	useEffect(() => {
    	!isPresent && ref.current == { opacity: 0 },
        	() => safeToRemove;
    }, [isPresent, safeToRemove]);


	return (
		<div className={styles.listStack} ref={ref}>
			<ul>
				<li className={styles.listItems}>
					<div className={styles.listItems}>Bachelors Degree in Audio Engineering</div>
					<div className={styles.listItems}>New England Institute of Art</div>
					<div className={styles.listItems}>2010-2013</div>
				</li>
				<li className={styles.listItems}>
					<div className={styles.listItems}>Software Engineering Certificate</div>
					<div className={styles.listItems}>Springboard Academy</div>
					<div className={styles.listItems}>2021-2022</div>
				</li>
				<li className={styles.listItems}>
					<div className={styles.listItems}>React Native Advanced Topics</div>
					<div className={styles.listItems}>Udemy Academy</div>
					<div className={styles.listItems}>2023</div>
				</li>
				<li className={styles.listItems}>
					<div className={styles.listItems}>React Native Practical Guide</div>
					<div className={styles.listItems}>Udemy Academy</div>
					<div className={styles.listItems}>2023</div>
				</li>
			</ul>
		</div>
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
		<div className={styles.listStack} ref={ref}>
			<ul>
				<li className={styles.listItems}>
					<div className={styles.listItems}>Full Stack Developer</div>
					<div className={styles.listItems}>Custom templates</div>
					<div className={styles.listItems}>Server integration</div>
				</li>
				<li className={styles.listItems}>
					<div className={styles.listItems}>Object Oriented Programming</div>
					<div className={styles.listItems}>Strong handle on data structures</div>
					<div className={styles.listItems}>Experience various types</div>
				</li>
				<li className={styles.listItems}>
					<div className={styles.listItems}>SQL & NoSQL Database</div>
					<div className={styles.listItems}>PostgeSQL SQLite</div>
					<div className={styles.listItems}>Realm & Firebase</div>
				</li>
				<li className={styles.listItems}>
					<div className={styles.listItems}>Full CRUD API Architecture</div>
					<div className={styles.listItems}>Custom built API's</div>
					<div className={styles.listItems}>Strong navigation through third party API's</div>
				</li>
				<li className={styles.listItems}>
					<div className={styles.listItems}>Platform Specific Code</div>
					<div className={styles.listItems}>Experience with web, iOS & Android</div>
				</li>
			</ul>
		</div>
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
		<div className={styles.listStack} ref={ref}>
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
		</div>
	);
};