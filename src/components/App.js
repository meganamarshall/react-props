import React from 'react';
import Color from './Color';

export default function App() {
  const name = 'blue';
  const rgb = {
    red: 0,
    green: 0,
    blue: 255
  };

  return <Color name={name} rgb={rgb} />;
}

