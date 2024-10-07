import { useState } from 'react';

function Card() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <div className="card__body">
          <p>Halo</p>
        </div>
      </div>
    </>
  );
}

export default Card;
