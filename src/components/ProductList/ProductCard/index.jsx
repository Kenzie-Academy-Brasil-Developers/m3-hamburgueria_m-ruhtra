import styles from "./styles.module.scss";

export const ProductCard = ({ product, addToCart }) => {
    return (
        <li className={styles.cardContainer}>
            <img src={product.img} alt={product.name} />

            <div className={styles.cardInfo}>
                <h3 className="heading three">{product.name}</h3>
                <span className="caption">{product.category}</span>
                <span className="body bold-600">
                    {product.price.toLocaleString('pt-BR',
                        { style: "currency", currency: "BRL" }
                    )}
                </span>

                <button className="btn medium"
                    onClick={() => addToCart(product)}
                >
                Adicionar
                </button>
            </div>
        </li>
    )
};
