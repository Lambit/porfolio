import { delay, easeInOut, motion, useTransform, useMotionValue } from "framer-motion";
import styles from './buttons.module.css'      

export const ThreeDButton = ({onClick}) => {
  return (
    <motion.div 
        className={styles.threeDButton}
        whileTap={{opacity: .9, scale: .95, boxShadow: '0'}}
        onClick={onClick}
    >
        <div className={styles.font}>Continue</div>
    </motion.div>
  );
};

export const AboutButton = ({onClick}) => {
  return (
    <motion.div 
        className={styles.aboutButton}
        whileTap={{opacity: .9, scale: .95, boxShadow: '0'}}
        onClick={onClick}
    >
        <div className={styles.fontA}>Continue</div>
    </motion.div>
  );
};
export const SaveTheEarth = ({onClick}) => {
  return (
    <motion.button 
      type='button'
      
        className={styles.aboutButton}
        whileTap={{opacity: .9, scale: .95, boxShadow: '0'}}
        onClick={onClick}
    >
        <div className={styles.fontA}>Continue</div>
    </motion.button>
  );
};


