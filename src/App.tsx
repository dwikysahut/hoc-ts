import { useState } from 'react';

import './App.css';
import Card from './component/CardList';
import CardList from './component/CardList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="wrapper">
        <CardList/>
        
      </div>
    </div>
  );
}

export default App;
