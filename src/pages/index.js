import Head from 'next/head'
import Image from 'next/image'
import AppLayout from '../components/Layout.jsx';
import { HomeHead } from '../components/HomeHeadLayout.jsx';
import Section from '../components/SectionsLayout.jsx';
import AboutPage from './about.js';
import WorkPage from './work.js';
import ContactPage from './contact.js';
import {  motion } from 'framer-motion';
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css';
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div className={styles.wrapper}>
      <AppLayout>
      <Head>
        <title>Lambit's Projects</title>
        <meta name="description" content="My projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <HomeHead/>
      

        {/* about */}
      <Section className={styles.section} >
        <div className={styles.container}>
          <div className={styles.font}>Lucas Lambert</div>
            <Image
              src={'/../public/a-contact.png'}
              alt='contact'
              height={200}
              width={200}
            />
          </div>
            <AboutPage />
      </Section>

      <Section className={styles.section} >
        <div className={styles.container}>
          <div className={styles.boxTwoFont}>Selected Projects</div>
            <Image
              src={'/../public/b-eye-no-bg.png'}
              alt='a'
              height={160}
              width={160}
            />
        </div>
          <WorkPage />
     
      </Section>
      <Section className={styles.section} >
        <div className={styles.container}>
          <div className={styles.boxThreeFont}>Contact</div>
         <motion.div 
          animate={{ rotate: 27 }}
          transition={{ repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
         >
            <Image
              src={'/../public/wave.png'}
              alt='wave'
              height={120}
              width={120}
            />
            </motion.div>
        </div>
            <ContactPage />
      </Section>
    </AppLayout>
    </div>
  );
};
