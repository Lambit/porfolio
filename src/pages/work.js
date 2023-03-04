import React, { useState } from "react";
import { PROJECTS } from "../data/static-data";
import Image from "next/image";
import { WorkList } from "../components/WorkLayout";
import styles from '../styles/work.module.css'

  //     {PROJECTS.map((p) => ( 
          
  //           <WorkList {...p}
  //             key={`${p.id}-${p.title}`}
  //             id={p.id}
  //             title={p.title}
  //             links={p.links}
  //             details={p.details}
  //           />
  //         ))
  //  }



function WorkPage ({children})  {
  

  return (
      
  
   
  
  <WorkList />
   
  
      
  );
};
export default WorkPage;