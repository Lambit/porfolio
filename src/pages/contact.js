import React, { useState } from "react";
import { XEyeAlien } from '../animations/svg/LogosAndIcons.js';
import ContactHead from "../components/contact/layout";
import styles from '../components/contact/contact.module.css';


export default function ContactPage() {
  const [look, setLook] = useState(false);

  return (
    <div className={styles.wrapper}>
      <ContactHead />

        {look == true ?
          <div className={styles.lydo}>
            <XEyeAlien />
          </div>
          : 
          null
        }
      <div className={styles.btn}>
      {/* <ThreeDButton onClick={(() => { setLook(true)})} /> */}
      </div>
    </div>
     
 

 
  );
};
