'use client';
import { useState } from 'react';
import Image from 'next/image';

import {
  counterSlice,
  useSelector,
  useDispatch,
  selectCount,
  selectSettlement,
} from '../../../lib/redux';
import styles from './counter.module.css';

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const settlement = useSelector(selectSettlement);
  const [incrementAmount, setIncrementAmount] = useState(2);
  const [imgSize] = useState(200);

  const Settlements = () => {
    if (count > 0 && count <= 100) {
      return (
        <>
          <h1>{settlement[0].type}</h1>
          <h2>Size: {settlement[0].size}</h2>
          <p>{settlement[0].description}</p>
          <Image
            alt={settlement[0].type}
            src={settlement[0].img}
            height={imgSize}
            width={imgSize}
          />
        </>
      );
    } else if (count > 100 && count <= 3000) {
      return (
        <>
          <h1>{settlement[1].type}</h1>
          <h2>Size: {settlement[1].size}</h2>
          <p>{settlement[1].description}</p>
          <Image
            alt={settlement[1].type}
            src={settlement[1].img}
            height={imgSize}
            width={imgSize}
          />
        </>
      );
    } else if (count > 3001 && count <= 5000) {
      return (
        <>
          <h1>{settlement[2].type}</h1>
          <h2>Size: {settlement[2].size}</h2>
          <p>{settlement[2].description}</p>
          <Image
            alt={settlement[2].type}
            src={settlement[2].img}
            height={imgSize}
            width={imgSize}
          />
        </>
      );
    } else if (count > 5001) {
      return (
        <>
          <h1>{settlement[3].type}</h1>
          <h2>Size: {settlement[3].size}</h2>
          <p>{settlement[3].description}</p>
          <Image
            alt={settlement[3].type}
            src={settlement[3].img}
            height={imgSize}
            width={imgSize}
          />
        </>
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.settlements}>
        <Settlements />
        {count <= 0 ? (
          <div className={styles.settlementempty}>
            <h1>Empty Land</h1>
            <h2>Size: 0</h2>
            <p>
              Add some people to see settlement sizes there is nothing to see
              here just empty land :)
            </p>
            <Image
              src="https://res.cloudinary.com/d74fh3kw/image/upload/v1695310253/empty-land_ralhqp.jpg"
              height={imgSize}
              width={imgSize}
              alt="Empty Land"
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className={styles.counter}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(counterSlice.actions.decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(counterSlice.actions.increment())}
        >
          +
        </button>
      </div>
      <div className={styles.buttonmenu}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value ?? 0))}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(counterSlice.actions.incrementByAmount(incrementAmount))
          }
        >
          Add People
        </button>
      </div>
      <div className={styles.legend}>
        <h1>Settlement Sizes by people (example)</h1>
        <p>Add X numbers of people to see the differences in the settlement.</p>
        <ul>
          <li>Hamlet: 1 - 100</li>
          <li>Village: 101 - 3000</li>
          <li>Town: 3001 - 5000</li>
          <li>City: 50001 - Infinity</li>
        </ul>
      </div>
    </div>
  );
};
