import React, { useState } from "react";
import { XEyeAlien } from '../../animations/svg/LogosAndIcons.js';
import ContactHead from "./layout";
import { ThreeDButton } from "../../components/buttons/Buttons";
import styles from './contact.module.css';


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
