import styles from './overlay.module.css';
import { motion } from "framer-motion";

const overlay = {
    visible: { opacity: 1},
    hidden: { opacity: 0 },
    
};


const Overlay = ({children}) => {

  return (
     <motion.div 
        className={styles.overlay} 
        initial='hidden' 
        animate='visible' 
        exit='hidden'
        variants={overlay}
        
    >
        {children}
    </motion.div>

  );
};
export default Overlay;