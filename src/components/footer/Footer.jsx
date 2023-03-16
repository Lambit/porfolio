import Link from "next/link";
import { ICONS } from "../../data/static-data";
import { motion } from "framer-motion";
import styles from './foot.module.css';

export const IconSet = () => {
  
  return (
        ICONS.map((co, indx) => ( 
          	
            <Link key={`${indx}-${co.id}`} href={co.link}  passHref legacyBehavior >  
              <motion.a
                className={styles.iconBtn}
                whileHover={{scale: 1.2,}}
                whileTap={{ scale: 0.95, rotateZ: '360deg' }}
              > 
   
                <div className={styles.icon100}>
			            {co.con100}
                </div>
                <div className={styles.icon50}>
			            {co.con50}
                </div>
                
              </motion.a>
            </Link>
       
        ))
      );
};

export const Footer = () => {
  return (
    <div className={styles.foot}>
      <div className={styles.email}>
        <text>Lamberts.luke@gmail.com</text>
      </div>
      
      <div className={styles.icons}>
        <IconSet />
      </div>
    </div>
  );
};

export default Footer;