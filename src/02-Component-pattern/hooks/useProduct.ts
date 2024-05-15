import { useEffect, useRef, useState } from 'react';
import {
  InitialValuesProps,
  Product,
  onChangeArgs,
} from '../interfaces/interfaces';

interface useProductsArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValuesProps;
}

const DEFAULT_VALUE = 0;

export const useProduct = ({
  product,
  onChange,
  value,
  initialValues,
}: useProductsArgs) => {
  const initialValue = initialValues?.count || value || DEFAULT_VALUE;

  const [counter, setCounter] = useState<number>(initialValue);
  const isMounted = useRef(false);

  console.log(counter);

  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }

    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min(counter + value, initialValues?.maxCount);
      newValue = Math.max(newValue, 0);
    }
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value || 0);
  };
  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value || initialValue);
  }, [value, initialValue]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    increaseBy,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    reset,
  };
};
