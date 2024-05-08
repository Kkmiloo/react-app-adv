import { ProductButtons, ProductImage, ProductTitle } from '../components';
import { ProductCard } from '../components/ProductCard';

import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';

export const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div className={'flex flex-wrap w-full'}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onChange={onProductCountChange}
            value={shoppingCart[product.id] && shoppingCart[product.id].count}
          >
            <ProductImage img='' />
            <ProductTitle />
            <ProductButtons />
          </ProductCard>
        ))}
      </div>

      <div className='fixed top-0 right-3'>
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className='w-24'
            onChange={onProductCountChange}
            value={product.count}
          >
            <ProductImage img='' />
            <ProductButtons />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
