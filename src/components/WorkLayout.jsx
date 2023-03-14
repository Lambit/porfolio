import React from "react";
import { motion } from "framer-motion";
import styles from '../styles/work.module.css'


export const WorkList = ({ onClick, title, details, id, links, layoutId, value }) => {

  return (

      <div className={styles.listStack} >
        <motion.div 
          key={id}
          layoutId={layoutId}
          className={styles.box}
          whileHover={{ backgroundColor: 'rgb(158, 0, 178,  0.8)', }}
        >
          <div className={styles.font}>
            {title}
             </div>

            <motion.button
              className={styles.btn}
              whileHover={{ boxShadow: '0 2px 10px 0 rgb(0, 255, 255)' }}
              whileTap={{ opacity: .6, scale: .7 }}
              onClick={onClick}
              value={value}
              type='submit'
            >
              {/* <motion.link className={styles.btn} href={links} /> */}
              View Site
            </motion.button>
           

            <div className={styles.small}>{details}</div>
         
        </motion.div>

      </div>
  );
};

