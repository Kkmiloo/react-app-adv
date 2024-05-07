export { ProductButtons } from './ProductButtons';

import { ProductButtons } from './ProductButtons';
import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductImage } from './ProductImg';
import { ProductTitle } from './ProductTitle';
//export { ProductCard } from './ProductCard';
export { ProductImage } from './ProductImg';
export { ProductTitle } from './ProductTitle';

export const ProductCard = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
