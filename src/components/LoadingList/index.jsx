import styles from "./style.module.scss";

const LoadingList = () => {
  return (
    <section className={styles.loadingListContainer}>
      <ul className={styles.loadingListItems}>
        <div ></div>
        <div ></div>
        <div ></div>
        <div ></div>
        <div ></div>
        <div ></div>
      </ul>
    </section>
  )
};

export default LoadingList;
