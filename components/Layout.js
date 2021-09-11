import styles from "../styles/Layout.module.css";

const layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>hello!</h1>
        {children}
      </main>
    </div>
  );
};

export default layout;
