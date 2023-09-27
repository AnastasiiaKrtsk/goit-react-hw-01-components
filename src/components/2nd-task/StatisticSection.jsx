import styles from './StatisticSection.module.css';
const statistic = statisticData => {
  return (
    <ul className={styles['stat-list']}>
      {statisticData.map(el => (
        <li className={styles.item} key={el.id}>
          <span className={styles.label}>{el.label}</span>
          <span className={styles.percentage}>{el.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};
export default statistic;
