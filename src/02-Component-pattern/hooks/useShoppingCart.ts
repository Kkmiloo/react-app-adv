import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

interface ShoppingCartProps {
  [key: string]: ProductInCart;
}

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartProps>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: _, ...rest } = oldShoppingCart;
      return {
        ...rest,
      };

      /* if (count === 0) {
        const { [product.id]: _, ...rest } = oldShoppingCart;
        return {
          ...rest,
        };
      }

      return {
        ...oldShoppingCart,
        [product.id]: {
          ...product,
          count,
        },
      }; */
    });
  };

  return { onProductCountChange, shoppingCart };
};
