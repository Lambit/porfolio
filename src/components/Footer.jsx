import Link from "next/link";
import {  Linkdin, GitHoob, Twit, Wave, PdRez } from '../components/svgs/SvgAnimations.js';
import { motion } from "framer-motion";
import styles from '../styles/Home.module.css';

const Footer = () => {
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
          <Link href={'https://docs.google.com/document/d/1kUhr7ugqJOuP3mIPFDuvEOnHx3iJrtbDVLykUmxF7bw/edit?usp=sharing'}>Resume</Link>
        </motion.button>     
      </div>
  );
};

export default Footer;