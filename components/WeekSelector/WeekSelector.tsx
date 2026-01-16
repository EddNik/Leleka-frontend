'use client';
import { motion } from 'framer-motion';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import css from './WeekSelector.module.css';

const WeekSelector = ({
  currentWeek,
  weekNumber,
}: {
  currentWeek: number;
  weekNumber: number;
}) => {
  const weeks = Array.from({ length: 40 }, (_, i) => i + 1);
  const activeRef = useRef<HTMLAnchorElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [weekNumber]);

  useEffect(() => {
    const slider = containerRef.current;
    if (!slider) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const mouseDown = (e: MouseEvent) => {
      isDown = true;
      slider.classList.add(css.dragging);
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const mouseLeave = () => {
      isDown = false;
      slider.classList.remove(css.dragging);
    };

    const mouseUp = () => {
      isDown = false;
      slider.classList.remove(css.dragging);
    };

    const mouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.2;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', mouseDown);
    slider.addEventListener('mouseleave', mouseLeave);
    slider.addEventListener('mouseup', mouseUp);
    slider.addEventListener('mousemove', mouseMove);

    return () => {
      slider.removeEventListener('mousedown', mouseDown);
      slider.removeEventListener('mouseleave', mouseLeave);
      slider.removeEventListener('mouseup', mouseUp);
      slider.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <nav className={css.week_selector_container}>
      {weeks.map((num) => {
        const isFuture = num > weekNumber;
        const isSelected = num === weekNumber;

        return (
          <Link
            key={num}
            href={isFuture ? '#' : `/journey/${num}`}
            className={`
        ${css.week_item} 
        ${isSelected ? css.active : ''} 
        ${isFuture ? css.disabled : ''}
      `}
            onClick={(e) => isFuture && e.preventDefault()}
          >
            <span className={css.week_number}>{num}</span>
            <span className={css.week_label}>Тиждень</span>

            {isSelected && (
              <motion.div
                layoutId="active-highlight"
                className={css.active_pill}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};
export default WeekSelector;
