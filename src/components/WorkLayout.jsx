import React, { useState, useRef } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import styles from '../styles/work.module.css'
import Link from "next/link";


export const WorkList = () => {
	return (
    <div className={styles.container}>
      <div className={styles.listStack}> 
				<motion.button className={styles.box}>
            <div className={styles.font}> I Shoot Coral </div>
              <motion.div 
                className={styles.repo} 
                whileHover={{scale: .8}} 
                // whileTap={{background: '#66FFB2'}}
              >
                <Link href={'https://github.com/Lambit/IShootCoral'}>View Site</Link>
              </motion.div>
				        <div>Photography App • React Native</div>
				</motion.button>
        </div>

		      <div className={styles.listStack}>
					  <motion.button className={styles.box}>
              <div className={styles.font}>Dean's List </div>
                  <div className={styles.repo}>
                    <Link href={'https://github.com/Lambit/deans-list-frontend'}>View Site</Link>
                  </div>
					          <div>Ecommerce • React • Node.js • Heroku</div>
            </motion.button>
          </div>
					
		
      		      <div className={styles.listStack}>
								  <motion.button 
                      className={styles.box} 
                      whileHover={{scale: 1.2,}}
                      whileTap={{ scale: 0.95 }} 
                  >
                      <div className={styles.font}> PlanIt Eats </div>
                                              <div className={styles.repo}>
                        <Link href={'https://github.com/Lambit/PlanItEatsApp'}>View Site</Link>
                      </div>
					              <div>Ecommerce • React Native • Firebase • Analytics</div>
					        </motion.button>
                </div>

			          <div className={styles.listStack}>
								  <motion.button 
                      className={styles.box} 
                      whileHover={{scale: 1.2,}}
                      whileTap={{ scale: 0.95 }} 
                  >
                      <div className={styles.font}> Find A Hero </div>
                                              <div className={styles.repo}>
                        <Link href={'https://github.com/Lambit/superhero-app'}>View Site</Link>
                      </div>
					                <div>Social • Python • Flask</div>
				          </motion.button>
                </div>
		</div>
	);
};