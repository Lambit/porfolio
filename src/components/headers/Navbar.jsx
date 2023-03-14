import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import styles from './nav.module.css';




const Navbar = () => {

  return (
    <div className={styles.nav}>
      {/* ship icon */}
        <ul className={styles.navUl}>
          <li > 
            <div className={styles.navItem} >
              <Link href={'/about'}  style={{caretColor: 'honeydew', color: 'honeydew', columnFill: 'auto'}}> About </Link>
            </div >

            </li> 
               
            <li >
              <div className={styles.navItem} >
                {/* Project Link */}
                <Link href={'/work'} style={{ caretColor: 'honeydew', color: 'honeydew', columnFill: 'auto'}}>Work </Link>
                {/* <button>work</button> */}
              </div>
            </li> 
       
            <li >
               <div className={styles.rightItem} >
                  <Link href={'/contact'} className={styles.rightItem}  style={{ caretColor: 'honeydew', color: 'honeydew', columnFill: 'auto'}} >Contact</Link>
              </div>
          </li> 
        </ul>
      </div>

  );
};

export default Navbar;