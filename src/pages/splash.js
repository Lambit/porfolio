import Head from 'next/head'
import Image from 'next/image'
import AppLayout from '../components/AppLayout.jsx';
import { HomeHead } from '../components/headers/HomeHeadLayout.jsx';
import Section from '../components/SectionsLayout.jsx';
import AboutPage from './about.js';
import { PositiveVelocity, NegativeVelocity } from '../components/AboutLayout.jsx';
import WorkPage from './work.js';
import Link from 'next/link';
import {  motion } from 'framer-motion';
import { XEyeAlien, LogoSvg } from '../components/svgs/SvgAnimations.js';
import { Inter } from 'next/font/google'
import styles from '../styles/splash.module.css';
const inter = Inter({ subsets: ['latin'] })

import myGuy from '../../public/a-contact.png'
import wave from '../../public/wave.png'
import lyDo from '../../public/spaceships/ufo-cruz.png'


export default function Splash() {
  
  return (
   
    <div className={styles.container}>
    
      
        <div className={styles.lyDo}><XEyeAlien /> </div>

         <motion.div style={{borderStyle: 'solid', borderColor:  '#f107a3',}}
                className={styles.btn} 
                
              >
                <Link href={'/'}>View Site</Link>
              </motion.div>

       

      
        

      

         </div>
    )
}