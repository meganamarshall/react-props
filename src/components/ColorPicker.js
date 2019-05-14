import React from 'react';
import styles from './ColorPicker.css';

export default function ColorPicker() {
  const redHandler = () => {
    console.log('red');
  };

  const greenHandler = () => {
    console.log('green');
  };

  const blueHandler = () => {
    console.log('blue');
  };

  return (
    <section className={styles.ColorPicker}>
      <button onClick={redHandler} className={styles.red}>Red</button>
      <button onClick={greenHandler} className={styles.green}>Green</button>  
      <button onClick={blueHandler} className={styles.blue}>Blue</button>
    </section>
  );
}
