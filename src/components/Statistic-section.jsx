const statistic = statisticData => {
  return (
    <ul className="stat-list">
      {statisticData.map(el => (
        <li className="item" key={el.id}>
          <span className="label">{el.label}</span>
          <span className="percentage">{el.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};
export default statistic;
