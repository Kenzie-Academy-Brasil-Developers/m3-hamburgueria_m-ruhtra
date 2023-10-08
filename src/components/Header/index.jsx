import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";

const Header = ({ setVisible, cartList, setValue }) => {
  
   return (
      <header className={styles.headerContainer}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div className={styles.searchDiv}>
            <form>
               <input
                  placeholder="Digite o produto"
                  type="text"
                  onChange={(e) => setValue(e.target.value)}
               />

               <button 
                  type="submit" 
                  className={styles.searchButton}
                  onClick={(e) => e.preventDefault()}>
                  <MdSearch className={styles.searchIcon} size={21} />
               </button>
            </form>

            <button className={styles.cartButton} onClick={() => setVisible(true)}>
               <MdShoppingCart className={styles.cartIcon} size={21} />
               <span className={`${styles.countCart}`}>{cartList.length}</span>
            </button>
         </div>
      </header>
   );
};

export default Header;
