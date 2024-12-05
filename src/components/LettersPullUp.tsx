'use client';
import { cn } from '@/utils/cn';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
export function LettersPullUp({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  const splittedText = text.split('');
 
  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };
  const ref = useRef(null);

  const isInView = useInView(ref);

  return (
    <div className="flex">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? 'animate' : ''}
          whileInView={isInView ? 'animate' : ''}
          custom={i}
          className={cn(
            '',
            className
          )}
        >
          {current == ' ' ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}