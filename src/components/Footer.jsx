import Link from "next/link";
import {  Linkdin, GitHoob, Twit, PdRez } from '../animations/svg/LogosAndIcons.js';
import { motion } from "framer-motion";
import styles from '../styles/Home.module.css';

const Footer = () => {
  return (
    <div className={styles.foot}>
      <div className={styles.email}>
        <text>Lamberts.luke@gmail.com</text>
        </div>
          <div className={styles.icons}>	  
            <motion.button
              className={styles.iconBtn}
              whileHover={{scale: 1.2,}}
              whileTap={{ scale: 0.95, rotateZ: '360deg' }}
              // onClick={() => <Link href={'https://twitter.com/Lucas_Lydon'}/>}
            > 
   
              <div className={styles.icon100}>
			          <Twit width={'100px'} height={'100px'} />
                <motion.link href={'https://twitter.com/Lucas_Lydon'}/>
              </div>
              <div className={styles.icon50}>
			          <Twit width={'50px'} height={'50px'} />
              </div>
                <Link href={'https://twitter.com/Lucas_Lydon'}/>
            </motion.button>

            <motion.button 
              className={styles.iconBtn}
              whileHover={{scale: 1.2,}}
              whileTap={{ scale: 0.95, rotateZ: '360deg' }}
              > 
                <div className={styles.icon100}><Linkdin width={'100px'} height={'100px'}/></div>
                <div className={styles.icon50}><Linkdin width={'50px'} height={'50px'}/></div>

                <Link href={'https://www.linkedin.com/in/lucas-lambert-5748601ab/'}/>
              </motion.button>

            <motion.button 
              className={styles.iconBtn}
              whileHover={{scale: 1.2,}}
              whileTap={{ scale: 0.95, rotateZ: '360deg' }}
            > 
              <div className={styles.icon100}> <GitHoob width={'100px'} height={'100px'}/> </div>
                <div className={styles.icon50}><GitHoob  width={'50px'} height={'50px'} /></div>

              <Link href={'https://github.com/Lambit'}/> 
            </motion.button>  

            <motion.button 
              className={styles.iconBtn}
              whileHover={{scale: 1.2,}}
              whileTap={{ scale: 0.95, rotateZ: '360deg' }}
            > 
              <div className={styles.icon100}><PdRez width={'100px'} height={'100px'}/></div>
              <div className={styles.icon50}><PdRez  width={'50px'} height={'50px'}  /></div>
              <Link href={'https://docs.google.com/document/d/1kUhr7ugqJOuP3mIPFDuvEOnHx3iJrtbDVLykUmxF7bw/edit?usp=sharing'}/>
            </motion.button>     
      </div>
    </div>
  );
};

export default Footer;