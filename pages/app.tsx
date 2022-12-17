import { useEffect, useState } from "react";
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import styles from '../styles/Clock.module.css';

export default function App() {
 const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className={styles.main}>
      <Clock 
      className={styles.clock} 
      value={value} 
      renderMinuteMarks={false}
      />
    </main>
  );
}
