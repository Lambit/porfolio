import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css'


const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* ship icon */}
      <div className={styles.navItem}>
        <div className={styles.navBtn}> 
          <Image src='/../public/l-3-logo.png' height={180} width={180} alt='logo' />
        </div>
      </div>

        {/* About Link */}
        <div className={styles.navItem}>
          <ul className={styles.listItems}>
            <li >
              <Link href={'/about'} className={styles.navLink}> 
                {/* <Image src='/../public/a-helmet.png' height={120} width={120} alt='logo' /> */}
                  <div className={styles.spanLabel}>About</div>
              </Link>
            </li>

            {/* Github Link */}
            <li >
              <Link href={'/'} className={styles.navLink}> 
                {/* <Image src='/../public/b-eye-no-bg.png' height={100} width={100} alt='logo' /> */}
                  <div className={styles.spanLabel}>Github</div>
              </Link>
            </li>
            <li >

              {/* Project Link */}
              <Link href={'/'} className={styles.navLink}> 
                {/* <Image src='/../public/ufo.png' height={100} width={100} alt='logo' /> */}
                  <div className={styles.spanLabel}>Work</div>
              </Link>
            </li>
       
          {/* Contact Link */}
         <li>
            <Link href={'/contact'} className={styles.navLink} >
            {/* <Image src='/../public/a-contact.png' height={100} width={100} alt='logo' /> */}
                  <div className={styles.spanLabel}>Contact</div>
              </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;