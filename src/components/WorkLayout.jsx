import React from "react";
import { motion } from "framer-motion";
import styles from '../styles/work.module.css'
import Link from "next/link";


export const WorkList = () => {
	return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.listStack}>
         
				  <motion.button 
            className={styles.box} 
            whileHover={{ backgroundColor: 'rgb(158, 0, 178,  0.8)', }}
          >
            <div className={styles.font}> iShoot Coral </div>
              <motion.div 
                className={styles.btn} 
                whileHover={{ boxShadow: '0 2px 10px 0 rgb(0, 255, 255)' }} 
                whileTap={{opacity: .7, scale: .8}}
              >
                <Link href={'https://github.com/Lambit/IShootCoral'}>View Site</Link>
              </motion.div>
				      <div>Photography App • React Native</div>
				</motion.button>
        </div>

		      <div className={styles.listStack}>
					  <motion.button className={styles.box} whileHover={{ backgroundColor: 'rgb(158, 0, 178,  0.8)' }}>
              <div className={styles.font}>Dean's List </div>
                  <motion.div
                    className={styles.btn}
                    whileHover={{ boxShadow: '0 2px 10px 0 rgb(0, 255, 255)' }} 
                    whileTap={{opacity: .7, scale: .8}}
                  >
                    <Link href={'https://github.com/Lambit/deans-list-frontend'}>View Site</Link>
                  </motion.div>
					          <div>Ecommerce • React • Node.js • Heroku</div>
            </motion.button>
          </div>
				
		
      		      <div className={styles.listStack}>
								  <motion.button className={styles.box} whileHover={{ backgroundColor: 'rgb(158, 0, 178,  0.8)', }}>
                      <div className={styles.font}> PlanIt Eats </div>
                        <motion.div 
                          className={styles.btn}
                          whileHover={{ boxShadow: '0 2px 10px 0 rgb(0, 255, 255)' }} 
                          whileTap={{opacity: .7, scale: .8}}
                        >
                        <Link href={'https://github.com/Lambit/PlanItEatsApp'}>View Site</Link>
                      </motion.div>
					              <div>Ecommerce • React Native • Firebase </div>
					        </motion.button>
                </div>

			          <div className={styles.listStack}>
								  <motion.button 
                    className={styles.box} 
                    whileHover={{ backgroundColor: 'rgb(158, 0, 178,  0.8)', }}
                  >
                      <div className={styles.font}> Find A Hero </div>
                        <motion.div 
                          className={styles.btn}
                          whileHover={{ boxShadow: '0 2px 10px 0 rgb(0, 255, 255)' }} 
                          whileTap={{opacity: .7, scale: .8}}
                        >

                          <Link href={'https://github.com/Lambit/superhero-app'}>View Site</Link>
                        </motion.div>
					                <div>Social • Python • Flask</div>
				          </motion.button>
                </div>
		</div>




                        
		</div>
	);
};