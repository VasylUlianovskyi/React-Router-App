import styles from "../HomeEl/HomeEl.module.sass";

function NotFound() {
  return (
    <div className={styles.homeEl}>
      404 Цієї сторінки поки не існує, але над цим ведеться активна робота
      <span>&#128521;</span>
    </div>
  );
}

export default NotFound;
