import React, { useState } from 'react';
import styles from './Accordion.module.css';
import Icon from '@/components/atoms/Icon/Icon';

interface AccordionProps {
  text: string;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ text, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.header} onClick={toggleAccordion}>
        <span className={styles.label}>{text}</span>
        <Icon
          type={isOpen ? 'up_arrow' : 'down_arrow'}
          className={styles.arrow}
        />
      </div>
      {isOpen && <div className={styles.content}>내용 한나</div>}
    </div>
  );
};

export default Accordion;
