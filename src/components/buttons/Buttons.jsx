import { delay, easeInOut, motion, useTransform, useMotionValue, cubicBezier } from "framer-motion";
import styles from './buttons.module.css'  

const yallBen= {
  hidden: {  opacity: .7,  },
  visible: {
   
  
      opacity: 1,

	  // boxShadow: [ "#FF0054" ],
      transition: {
        opacity: { duration: 2,  ease: easeInOut, repeat: Infinity, }, 
      },
  
   
  }
};

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

export const SaveTheEarthBtn = ({onClick}) => {

  return (
    
    <motion.button 
      type='button'
        className={styles.saveWrldBtn}
        whileTap={{opacity: .9, scale: .95, boxShadow: '0'}}
        onClick={onClick}
    >
        <div className={styles.fontA}>PRESS</div>
    </motion.button>
 
  );
};

export const DropDownBtn = ({ id, className, onClick, fillRule, value }) => {

  return (
    
    <motion.button
      id={id}
      type='button'
      value={value}
      className={className}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
    >
      <motion.div>
        About Me
      </motion.div>
       
        <motion.div
          variants={{
            open: { rotate: 180, fill: '#ff4500' },
            closed: { rotate: 0, fill: '#800080'}
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="25" height="25" viewBox="0 0 25 25" fillRule={fillRule}>
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
 
  );
};


