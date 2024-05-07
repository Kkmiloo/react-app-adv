import { useContext } from 'react';
import styles from '../styles/styles.module.css';

import { ProductContext } from './ProductCard';

interface Props {
  className?: string;
}

export const ProductButtons = ({ className }: Props) => {
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
