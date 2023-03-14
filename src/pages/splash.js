import Link from 'next/link';
import {  motion } from 'framer-motion';


import styles from '../styles/splash.module.css';





export default function Splash() {
  
  return (
   
    <div className={styles.container}>
    
      
        {/* <div className={styles.lyDo}><XEyeAlien /> </div> */}

         <motion.div style={{borderStyle: 'solid', borderColor:  '#f107a3',}}
                className={styles.btn} 
                
              >
                <Link href={'/'}>View Site</Link>
              </motion.div>

       

      
        

      

         </div>
    )
}