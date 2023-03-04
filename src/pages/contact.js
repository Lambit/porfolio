import React, { useState } from "react";
import Link from "next/link";
import { XEyeAlien } from "../components/svgs/SvgAnimations";
import { ContactHead } from "../components/ContactLayout";
import { ThreeDButton } from "../components/buttons/Buttons";
import styles from '../styles/contact.module.css';


const ContactPage = () => {
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

      <ThreeDButton onClick={(() => { setLook(true)})} />
    </div>
     
 

 
  );
};
export default ContactPage;