import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from '../styles/contact.module.css';

const ContactPage = () => {
  return (
        <div className={styles.container}>
      {/* education */}
     
        <motion.button
          className={styles.button}
          whileHover={{scale: 1.2,}}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={'https://twitter.com/Lucas_Lydon'}>Twitter</Link>
        </motion.button>

        <motion.button 
          className={styles.button}
          whileHover={{scale: 1.2,}}
          whileTap={{ scale: 0.95 }}
          >
            <Link href={'https://www.linkedin.com/in/lucas-lambert-5748601ab/'}>LinkedIn</Link>
          </motion.button>

        <motion.button 
          className={styles.button}
          whileHover={{scale: 1.2,}}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={'https://github.com/Lambit'}>Github</Link>
        </motion.button>     
      </div>
  );
};
export default ContactPage;