import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './Accordion.module.css';

interface AccordionProps {
  number: string;
  title: string;
  content: string;
}

export const Accordion = ({ number, title, content }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}>
      <div className={styles.accordionHeader} onClick={() => setIsOpen(!isOpen)}>
        <h3><span className={styles.number}>{number}</span> {title}</h3>
        <div className={styles.icon}>
          {isOpen ? <Minus /> : <Plus />}
        </div>
      </div>
      <div className={styles.accordionContent}>
        <p>{content}</p>
      </div>
    </div>
  );
};
