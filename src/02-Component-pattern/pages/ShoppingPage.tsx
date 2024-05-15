import { ProductButtons, ProductImage, ProductTitle } from '../components';
import { ProductCard } from '../components/ProductCard';

//import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div className={'flex flex-wrap w-full'}>
        <ProductCard
          key={product.id}
          product={product}
          initialValues={{ count: 4, maxCount: 5 }}
        >
          {() => (
            <>
              <ProductImage img='' />
              <ProductTitle />
              <ProductButtons />
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
