import React, { useState } from "react";

import { WorkList } from "../components/WorkLayout";


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