import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss";

export const CartItemCard = ({ product, removeFromCart }) => {

   return (
      <li className={styles.cartContainer}>
         <div className={styles.cartInfo}>
            <div className={styles.cartImg}>
               <img src={product.img} alt={product.name} />
            </div>

            <div>
               <h3 className="heading three">{product.name}</h3>
               <span className="body bold-600">
                  {product.price.toLocaleString('pt-BR',
                     { style: "currency", currency: "BRL" }
                  )}
               </span>
            </div>
         </div>

         <button
            className={styles.buttonDelete}
            aria-label="delete"
            title="Remover item"
            onClick={() => removeFromCart(product.id)}
         >
            <MdDelete size={21} />
         </button>
      </li>
   );
};
