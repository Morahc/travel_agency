import { animate, useInView, useMotionValue, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

type CounterProps = {
  from?: number;
  to: number;
  suffix?: string;
};

const Counter = ({ from=0, to, suffix }: CounterProps) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 2 });
    }
  }, [count, inView, to]);

  return (
    <>
      <motion.span ref={ref}>{rounded}</motion.span>
      <span>{suffix}</span>
    </>
  );
};

export default Counter;
