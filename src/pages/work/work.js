import dynamic from "next/dynamic";
import React, { useState, useRef } from "react";
import { PROJECTS } from "../../data/static-data";
import { WorkList } from "./layout";
import Modal from "../../components/modal/Modal";
import styles from './work.module.css'


export default function WorkPage(projects = dynamic(() => import('../../data/static-data')) ) {
    const ref = useRef();
    const [selectedId, setSelectedId] = useState(null);
    const [projectData, setProjectData] = useState(PROJECTS);
    const [showModal, setShowModal] = useState(false);


    const setHidden = () => {
      console.log(document.body.style.overflow);
      if (document.body.style.overflow !== "hidden") {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "scroll";
      }
    };


    const clickHandler = (t) => {
      projectData.map((data) => {
        if (data.id === t.target.value) {
          setSelectedId(data)
          return data;
        } else {
          return selectedId;
        }
      })
      setShowModal(true);  
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
             
          ))}

      </div>
            {showModal &&  (
            
              <Modal
                layoutId={selectedId}
                id={selectedId} 
                onClick={clearHandler}
                href={`${selectedId.links}`}
                projTitle={selectedId.title}
                projectImg={selectedId.img}
              />

            )}
   </> 
  );
};
