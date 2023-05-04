import Navbar from "./Navbar";
import styles from "@/styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.main}>{children}</div>
    </>
  );
};

export default Layout;
