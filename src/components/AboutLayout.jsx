import React, { useEffect, useRef } from "react";
import { 
	usePresence,
	  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame , wrap, spring
	} from "framer-motion";

import styles from '../styles/about.module.css'



export const AboutEd = () => {
	const ref = useRef(null);
  	const [isPresent, safeToRemove] = usePresence();

	useEffect(() => {
    	!isPresent && ref.current == { opacity: 0 },
        	() => safeToRemove;
    }, [isPresent, safeToRemove]);


	return (
		<motion.div 
		initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{ delay: .4, duration: 1.2 }} 
		className={styles.listStack} 
		ref={ref}
		>
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
					<div className={styles.listItems}>React Native A Practical Guide</div>
					<div className={styles.listItems}>Udemy Academy</div>
					<div className={styles.listItems}>2023</div>
				</li>
			</ul>
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
		<motion.div  className={styles.listStack} 
			initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{ delay: .4, duration: 1.2 }} 
			ref={ref}
		>
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

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

   const x = useTransform(baseX, (v) => `${wrap(100, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

	if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

    return (
    <div className={styles.parallax}>
      <motion.div className={styles.scroller} style={{ x }}>
        <span>{children} </span>
        {/* <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span> */}
      </motion.div>
    </div>
  );
}

export function NegativeVelocity({baseVelocity,  _element}) {
  return (
    <section className={styles.scrollSection}>
      <ParallaxText baseVelocity={baseVelocity}>{ _element}</ParallaxText>
    </section>
  );
};

export function PositiveVelocity({ baseVelocity, _element }) {
  return (
    <section className={styles.scrollSection}>
      <ParallaxText baseVelocity={baseVelocity}>{_element}</ParallaxText>
    </section>
  );
};