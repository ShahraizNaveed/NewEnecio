import CommonBanner from '../../components/CommonBanner/CommonBanner'
import HotSellingProducts from '../../components/HotSellingProducts/HotSellingProducts';
import ProductCategories from '../../components/ProductCategories/productCategories';

const Products = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <CommonBanner title="Products" />
      <ProductCategories />
      <HotSellingProducts />
    </>
  )
}

export default Products