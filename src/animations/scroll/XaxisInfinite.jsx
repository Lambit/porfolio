import { useRef } from "react";
import { 
	motion,
  	useScroll,
  	useSpring,
  	useTransform,
  	useMotionValue,
  	useVelocity,
  	useAnimationFrame, 
  	wrap,
} from "framer-motion";
import styles from './animation.module.css'


function ParallaxX({ children, baseVelocity = 100 }) {
    // values
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

    // set velocity on scroll
    const x = useTransform(baseX, (v) => `${wrap(100, -45, v)}%`);
    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;

        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;

        }
        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className={styles.parallax}>
          <motion.div className={styles.scroller} style={{ x }}>
            <span>{children} </span>
          </motion.div>
        </div>
  );
}

export function VarianceVelocity({baseVelocity,  _element, _variants}) {
  return (
    <section className={styles.scrollSection}>
      <ParallaxX baseVelocity={baseVelocity}>
		    <motion.div 
			    animate='visible' 
			    initial='hidden' 
			    variants={_variants}
		    >
			    { _element}

		    </motion.div>
	    </ParallaxX>
    </section>
  );
};

export function XVelocity({ baseVelocity, _element }) {
  return (
    <section className={styles.scrollSection}>
        <ParallaxX 
            baseVelocity={baseVelocity}>

                {_element}

        </ParallaxX>
    </section>
  );
};