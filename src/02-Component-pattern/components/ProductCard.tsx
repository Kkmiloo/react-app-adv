import styles from '../styles/styles.module.css';

import '../styles/custom-styles.css';
import { useProduct } from '../hooks/useProduct';
import { ReactElement, createContext } from 'react';
import {
  InitialValuesProps,
  Product,
  ProductCardHandlers,
  ProductContextProps,
  onChangeArgs,
} from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
  product: Product;
  //children?: ReactElement | ReactElement[] ;
  children: (arg: ProductCardHandlers) => JSX.Element;
  className?: string;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValuesProps;
}

export const ProductCard = ({
  children,
  product,
  className,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, isMaxCountReached, reset } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        initialValues,
      }}
    >
      <div className={`${styles.productCard} ${className}`}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
