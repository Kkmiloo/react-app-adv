import { ProductButtons, ProductImage, ProductTitle } from '../components';
import { ProductCard } from '../components/ProductCard';

const product = {
  id: '1',
  title: 'Coffee',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div className={'flex flex-wrap w-full'}>
        {/*        <ProductCard product={product}>
          <ProductImage />
          <ProductCard.Title title='Hola' />
        </ProductCard> */}

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
