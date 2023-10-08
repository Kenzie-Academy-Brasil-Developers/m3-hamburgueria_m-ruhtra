import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss";

const ProductList = ({ productList, addToCart }) => {
   
   return (
      <section className={styles.productListContainer}>
         <ul className={styles.productListItems}>
            {productList.map((product) => (
               <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
               />
            ))}
         </ul>
      </section>
   );
};

export default ProductList;
