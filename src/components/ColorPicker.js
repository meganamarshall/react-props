import React from 'react';

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
    <section>
      <button onClick={redHandler}>Red</button>
      <button onClick={greenHandler}>Green</button>  
      <button onClick={blueHandler}>Blue</button>
    </section>
  );
}
