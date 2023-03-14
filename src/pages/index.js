import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react';
import { LogoSvg } from '../animations/svg/LogosAndIcons.js';
import AppLayout from '../components/AppLayout.jsx';
import { HomeHead } from '../components/headers/HomeHeadLayout.jsx';
import Section from '../components/SectionsLayout.jsx';
import { motion, AnimatePresence, easeIn } from 'framer-motion';
import AboutPage from './about.js';
import { Barry } from '../animations/svg/Characters'; 
import { ThreeDButton, } from '../components/buttons/Buttons.jsx';
import { XVelocity, VarianceVelocity } from '../animations/scroll/XaxisInfinite.jsx';
import WorkPage from './work.js';
import ContactPage from './contact.js';
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css';
const inter = Inter({ subsets: ['latin'] })

import lyDo from '../../public/spaceships/ufo-cruz.png';



export default function Home() {
  const [show ,setShow] = useState(false);

  const bounce = {
    visible: {
        scale: 1.1, 
        transition: { repeat: Infinity, duration: 1},
    },
  };

  const astro = {
    hidden: {  x: 0, y: 0, scale: .2, pathLength: 0, },
    visible: {
		pathLength: 1,
        x: [140, 0], duration: 20,
    	y: [0, 140], duration: 20,
		scale: 1, duration: 20,
		pathLength: { type: "spring", duration: 8, bounce: 160, velocity: 60, ease: easeIn  },
        transition: { delay: 2.5, duration: 8,  },
    }
};

  const massDestruct = () => {
    setShow(!show);
  };


  return (
    <>
     <Head>
      <title>Lambit's Projects</title>
      <meta name="description" content="My projects" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

      {/* ------------------------
            start app-layout 
      ------------------------*/}
      <AppLayout>

          <div className={styles.wrapper}>
            {/* ------------------------
                  animated header 
            ------------------------*/}
       
            <AnimatePresence>
         
            <HomeHead 
            // showAstro={<ThreeDButton onClick={() => setShow(!show)}/>}
            />
   
            </AnimatePresence>
       

          {/* ------------------------
              about section page 
          ------------------------*/}
          <Section className={styles.section} id='aboutMe'>

          <VarianceVelocity 
            baseVelocity={9}
            _element={<div >Full Stack Developer</div>}
          /> 

            <div className={styles.container}>
            <div className={styles.font}>
              Lucas Lambert
            </div>

            {/* <motion.div>
              <Barry />
              </motion.div> */}

           <LogoSvg />
          </div>
          <AboutPage />

              <XVelocity
                baseVelocity={-7}
                _variants={bounce}
                _element={
                  <Image
                    src={lyDo}
                    alt='cruz'
                    height={200}
                    width={200}
                    style={{zIndex: -1,}}
                />
                }
              /> 
          
          </Section>

          <Section className={styles.workSec}  id='myWork'>
            <div className={styles.container}>
            <div className={styles.boxTwoFont}>Selected Projects</div>

              {/* <MyGuy /> */}
            </div>
             <WorkPage /> 
         




     </Section> 


    
        
             
   

    <Section className={styles.section} id='hitMeUp'>
       
            <ContactPage />
      </Section>

    </div>
    </AppLayout>

    </>
  );
};
