import { useEffect, useState } from "react";
import { CartModal, Header, ProductList, LoadingList } from "../../components";
import { burgerApi } from "../../services/api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./style.module.scss";

const HomePage = () => {
   const localCart = localStorage.getItem("@cart");

   const [isVisible, setVisible] = useState(false);
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState(
      localCart ? JSON.parse(localCart) : []
   );
   const [value, setValue] = useState("");
   const [loading, setLoading] = useState(true);

   // useEffect montagem - carrega os produtos da API e joga em productList
   useEffect(() => {
      const getProducts = async () => {
         try {
            setLoading(true);
            const { data } = await burgerApi.get();
            setProductList(data);
         } catch (error) {
            alert(error.message);
         } finally {
            setLoading(false);
         }
      }

      getProducts();
   }, []);

   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   useEffect(() => {
      localStorage.setItem("@cart", JSON.stringify(cartList));
   }, [cartList]);

   // adição, exclusão, e exclusão geral do carrinho
   const addToCart = (productToAdd) => {
      const hasProduct = cartList.some((product) => product.id === productToAdd.id);

      if (!hasProduct) {
         setCartList([...cartList, productToAdd]);
         toast.success("Produto adicionado ao carrinho!")
      } else {
         toast.error("O produto já está no carrinho!")
      }
   }

   const removeFromCart = (productToRemoveId) => {
      const newCart = cartList.filter((product) => product.id !== productToRemoveId);
      setCartList(newCart)
      toast.success("Produto removido do carrinho!")
   }

   const removeAllCart = () => {
      setCartList([]);
      toast.success("Seu carrinho está vazio!")
   }

   // filtro de busca
   let filteredItens = productList.filter((product) => product.name.toUpperCase().includes(value.toUpperCase()))

   // renderizações condições e o estado para exibir ou não o carrinho
   // estilizar tudo com sass de forma responsiva
   return (
      <>
         <Header
            setVisible={setVisible}
            cartList={cartList}
            setValue={setValue}
         />

         <main className={styles.mainContainer}>
            {loading ? (
               <LoadingList/> 
            ) : (
               <ProductList
                  productList={filteredItens}
                  addToCart={addToCart}
               />
            )}
            
            {isVisible ? (
               <CartModal
                  setVisible={setVisible}
                  cartList={cartList}
                  removeFromCart={removeFromCart}
                  removeAllCart={removeAllCart}
               />
            ) : null}

            <ToastContainer position="bottom-right" autoClose={2 * 1000} />
         </main>
      </>
   );
};

export default HomePage;
