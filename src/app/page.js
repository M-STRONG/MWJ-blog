import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Header/Header";
import Card from "./card/card";
import Cover from "./Cover/Cover";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.up}>
        <Cover />
        <div className={styles.down}>
          <Card />
          <Footer />
        </div>
      </div>
    </main>
  );
}
