import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react';
import { LogoSvg, MyGuy } from '../components/svgs/SvgAnimations.js';
import AppLayout from '../components/AppLayout.jsx';
import { HomeHead } from '../components/headers/HomeHeadLayout.jsx';
import Section from '../components/SectionsLayout.jsx';
import AboutPage from './about.js';
import { PositiveVelocity, NegativeVelocity } from '../components/AboutLayout.jsx';
import WorkPage from './work.js';
import ContactPage from './contact.js';
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css';
const inter = Inter({ subsets: ['latin'] })

import lyDo from '../../public/spaceships/ufo-cruz.png';



export default function Home() {

  return (
    <>
     <Head>
          <title>Lambit's Projects</title>
          <meta name="description" content="My projects" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
    <div className={styles.wrapper}>
      

      <AppLayout>
        <HomeHead/>
        <Section className={styles.section} id='aboutMe'>
          <PositiveVelocity 
            baseVelocity={9}
            _element={<div >Full Stack Developer</div>}
          /> 

          <div className={styles.container}>
          <div className={styles.font}>Lucas Lambert</div>
            <LogoSvg />
              </div>
            <AboutPage />

              <NegativeVelocity
                baseVelocity={-7}
                _element={
                  <Image
                    src={lyDo}
                    alt='cruz'
                    height={120}
                    width={120}
                    style={{zIndex: -1,}}
                />
                }
              />
          
        </Section>

        <Section className={styles.section} id='myWork'>
          <div className={styles.container}>
          <div className={styles.boxTwoFont}>Selected Projects</div>
          
            {/* <MyGuy /> */}
          </div>
          <WorkPage /> 




     </Section> 


    
        
             
   

    <Section className={styles.section} id='hitMeUp'>
       
            <ContactPage />
      </Section>


    </AppLayout>
    </div>
    </>
  );
};
