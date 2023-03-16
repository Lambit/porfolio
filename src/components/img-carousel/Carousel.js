import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useState } from 'react'
import { motion, AnimatePresence, wrap } from "framer-motion";
// import { CAROL_IMGS } from '../../data/static-data';


import imgOne from '../../../public/odd-neon.jpeg';
import imgTwo from '../../../public/s-weird.jpeg';
import imgThree from '../../../public/run-us.jpeg';
import styles from './carousel.module.css';

const sliderVariants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accommodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};


export default function Carousel({ projectImg }) {
    const bigD = [imgOne, imgTwo, imgThree];
    const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, projectImg.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);

  };

  return (
    <div className={styles.carouselCon}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
            key={page}
            custom={direction}
            variants={sliderVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 100, duration: .2  },
              opacity: { duration: 1 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
    
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
        >
          <Image
            src={projectImg[imageIndex]}
            alt='pal'
            height={400}
            width={200}
            />
        </motion.div>
      </AnimatePresence>
      <div className={styles.next} onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className={styles.prev} onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </div>
  )
}