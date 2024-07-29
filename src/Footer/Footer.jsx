import styles from "./Footer.module.sass";

function Footer() {
  return (
    <section className={styles.footerEl}>
      CREATE BY:{" "}
      <a className={styles.link} href="https://t.me/LamberLoss">
        Vasyl Ulianovskyi
      </a>
    </section>
  );
}

export default Footer;
