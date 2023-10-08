import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss";
import { useEffect, useRef } from "react";

const CartModal = ({ cartList, setVisible, removeFromCart, removeAllCart }) => {
   const modalRef = useRef(null);

   //useEffect fechar modal clicar fora do mesmo
   useEffect(() => {
      const handleOutClick = (event) => {
         if (!modalRef.current?.contains(event.target)) {
            setVisible(false);
         }
      }

      window.addEventListener("mousedown", handleOutClick);

      return () => {
         window.removeEventListener("mousedown", handleOutClick);
      }
   }, [])

   //useEffect fechar modal com tecla 'esc'
   useEffect(() => {
      const handleKeydown = (event) => {
         if (event.key === "Escape") {
            setVisible(false)
         }
      }

      window.addEventListener("keydown", handleKeydown);

      return () => {
         window.removeEventListener("keydown", handleKeydown);
      }
   }, [])

   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div className={styles.modalOverlay} role="dialog">
         <div ref={modalRef} className={styles.modalContainer}>
            <div className={styles.modalHeader}>
               <h2 className={styles.titleModal}>Carrinho de compras</h2>

               <button aria-label="close" title="Fechar" onClick={() => setVisible(false)}>
                  <MdClose size={21} />
               </button>
            </div>

            <div className={styles.cartContainer}>
               {cartList.length > 0 ? (
                  <ul className={styles.cartListContainer}>
                     {cartList.map((product) => (
                        <CartItemCard
                           key={product.id}
                           product={product}
                           removeFromCart={removeFromCart}
                        />
                     ))}
                  </ul>
               ) :
                  <h2 className="heading two">Seu carrinho está vazio</h2>
               }
            </div>

            <div className={styles.modalDivTotal}>
               <div>
                  <span className="headline modal">Total</span>
                  <span className="body">
                     {total.toLocaleString('pt-BR',
                        { style: "currency", currency: "BRL" })}
                  </span>
               </div>

               <button className="btn default"
                  onClick={() => removeAllCart()}
               >
                  Remover todos
               </button>
            </div>
         </div>
      </div>
   );
};

export default CartModal;
