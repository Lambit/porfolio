import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/navbar.module.css';




const Navbar = () => {

  return (
    <div className={styles.container}>
      {/* ship icon */}
      <div className={styles.navItem}/>

    
      <ul>
            <li > 
              <Link href={'/about'} className={styles.navLink}/> 

                 
       
            </li> 


         
  
            <li >

              {/* Project Link */}
              <Link href={'/work'} className={styles.navLink}/> 
     
            </li> 
       
      <li>
            <Link href={'/contact'} className={styles.navLink} />

          </li> 
        </ul>
      </div>

  );
};

export default Navbar;