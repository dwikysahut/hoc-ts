import { useState } from 'react';
import withLoader from '../custom-hook/withLoader';

function CardList(data: any) {
  const [count, setCount] = useState(0);
console.log(data)
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

export default withLoader(CardList, '');
