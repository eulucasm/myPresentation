import styles from './LogoTicker.module.css';
import { Smartphone, Server, Database, Cloud } from 'lucide-react';

export const LogoTicker = () => {
  const techs = [
    { name: "Android", icon: <Smartphone size={32} /> },
    { name: "Kotlin", icon: <Smartphone size={32} /> },
    { name: "Flutter", icon: <Smartphone size={32} /> },
    { name: "React Native", icon: <Smartphone size={32} /> },
    { name: "KMP", icon: <Smartphone size={32} /> },
    { name: "Java", icon: <Server size={32} /> },
    { name: "Node.js", icon: <Server size={32} /> },
    { name: "JS/TS", icon: <Server size={32} /> },
    { name: "AWS", icon: <Cloud size={32} /> },
    { name: "PostgreSQL", icon: <Database size={32} /> },
  ];
  
  // Duplicar a array para scroll infinito suave
  const displayTechs = [...techs, ...techs, ...techs];

  return (
    <div className={styles.tickerContainer}>
      <div className={styles.tickerContent}>
        {displayTechs.map((tech, i) => (
          <div key={i} className={styles.techItem}>
            {tech.icon} {tech.name}
          </div>
        ))}
      </div>
    </div>
  );
};
