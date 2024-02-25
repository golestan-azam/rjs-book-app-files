import styles from "./Layout.module.css"

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>React.js Full Cource</p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Azam 😊</p>
      </footer>
    </>
  );
}

export default Layout;
