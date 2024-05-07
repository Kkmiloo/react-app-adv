import { useContext } from 'react';
import styles from '../styles/styles.module.css';

import { ProductContext } from './ProductCard';

export const ProductButtons = () => {
  const { increaseBy, counter } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -{' '}
      </button>
      <button className={styles.countLabel}>{counter}</button>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};
