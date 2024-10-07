import { useState } from 'react';

import './App.css';
import Card from './component/Card';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
