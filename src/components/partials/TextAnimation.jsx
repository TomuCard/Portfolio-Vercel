import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
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

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

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
    <div className="text-[8vw] whitespace-nowrap felx flex-nowrap m-0 overflow-hidden font-bold text-stroke leading-none">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default function TextAnimation() {
  return (
    <section className='absolute mt-40 w-screen h-screen -z-10 flex flex-col justify-end items-center gap-0 '>
      <ParallaxText baseVelocity={-0.5}>WEB FRONTEND DESIGN  BACKEND FRAMEWORK SITE USER</ParallaxText>
      <ParallaxText baseVelocity={0.5}>REACT.JS CSS PHP VITE.JS HTML DOCKER JAVASCRIPT TAILWIND PYTHON</ParallaxText>
    </section>
  );
}
