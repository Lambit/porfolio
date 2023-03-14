import dynamic from "next/dynamic";
import React, { useState, useRef, useEffect, useReducer } from "react";
import { PROJECTS } from "../data/static-data";
import { WorkList } from "../components/WorkLayout";
import Modal from "../components/modal/Modal";
import styles from '../styles/work.module.css'

function reducer(state, action) {
  switch (action.type) {
    case 'changed_id': {
      return {
        ...state,
        id: action.nextId,
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}




export default function WorkPage(projects = dynamic(() => import('../data/static-data')) ) {
    const ref = useRef();
 
    const [selectedId, setSelectedId] = useState(null);
    const [projectData, setProjectData] = useState(PROJECTS);
    const [showModal, setShowModal] = useState(false);
    const [state, dispatch] = useReducer(reducer, {...projectData})
    // useEffect(() => { 
    //   let myPs = PROJECTS.map((p, i ) => {
    //     return {
    //       key: `${p.id}-${i}`,
    //       id: p.id,
    //       title: p.title,
    //       links: p.links,
    //       details: p.details
    //     }
    //   });
    // setProjectData(myPs);
    // }, []);

    const setHidden = () => {
    console.log(document.body.style.overflow);
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };


      const clickHandler = () => {
 
        setSelectedId(...projectData, {id: selectedId,});
        setShowModal(true);
        setHidden()
         console.log(projectData)
  
      };

      const clearHandler = (id) => {
        setShowModal(false);
        setSelectedId(null);


      };

  return (
   <>
 <div className={styles.container}>
         {projectData.map((p, i) => (
         
            <WorkList
              key={`${i}-${p.id}`}
              id={p.id}
              layoutId={p.layoutId}
              layoutIdMod={selectedId}
              title={p.title}
              details={p.details}
              links={p.links}
              onClick={clickHandler}
              value={p.id}
            />
             
          ))
          
          
          }

</div>
   {showModal &&  (
    
            <Modal
              layoutId={selectedId}
              id={selectedId} 
              onClick={clearHandler}
              // projTitle={selectedId.title}
            
          
            />
    )}
  
     
   
   </> 
     
   
      
  
   
  

   
  
      
  );
};
