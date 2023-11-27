import styles from './NotFoundBlock.module.scss';

function NotFoundBlock() {
  return (
    <div className={styles.title}>
      <h1>
        <span>😢</span>
        <br />
        Ничего нет
      </h1>
      <p className={styles.description}>Точно ничего нет</p>
    </div>
  );
}

export default NotFoundBlock;
