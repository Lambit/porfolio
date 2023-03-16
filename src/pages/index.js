import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react';
import { LogoSvg } from '../animations/svg/LogosAndIcons.js';
import AppLayout from '../components/app-layout/AppLayout.jsx';
import { HomeHead } from '../components/headers/HomeHeadLayout.jsx';
import Section from '../components/section/SectionsLayout.jsx';
import { motion, AnimatePresence, easeIn } from 'framer-motion';
import AboutPage from './about';
import { XVelocity } from '../animations/scroll/XaxisInfinite.jsx';
import WorkPage from './work.js';
import ContactPage from './contact.js';
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css';
const inter = Inter({ subsets: ['latin'] })

import lyDo from '../../public/spaceships/ufo-cruz.png';



export default function Home() {

  const bounce = {
    visible: {
        scale: 1.1, 
        transition: { repeat: Infinity, duration: 1},
    },
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
              <div className={styles.container}>
                <div className={styles.font}>
                  Lucas Lambert
                </div>
                  <LogoSvg height={'200px'} width={'200px'} />
         

             
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
            

            {/* ----------------------
                work section page 
            ------------------------*/}
            <Section className={styles.section}  id='myWork'>
              <div className={styles.container}>
                <div className={styles.boxTwoFont}>
                  Selected Projects
                </div>
                {/* <MyGuy /> */}
              </div>

              <WorkPage /> 
            </Section> 

            {/* ----------------------
                contact section page 
            ------------------------*/}
            <Section className={styles.section} id='hitMeUp'>
              <ContactPage />
            </Section>

          </div>
      </AppLayout>

    </>
  );
};
