import React from 'react';
import Dog from './Dog';
import Header from './Header';

export default function App() {
  return (
    <>
    <Header />
    <Dog name="Bear" age={8} weight="40 lbs" />
    </>
  );
}
