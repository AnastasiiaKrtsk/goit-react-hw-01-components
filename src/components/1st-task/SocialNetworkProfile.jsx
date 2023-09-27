// *WITH DATA
import styles from './SocialNetworkProfile.module.css';
const renderUserProfile = userData => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={userData.avatar}
          alt="User avatar"
          className={styles.avatar}
        />
        <p className={styles.name}>{userData.username}</p>
        <p className={styles.tag}>{'@' + userData.tag}</p>
        <p className={styles.location}>{userData.location}</p>
      </div>

      <ul className={styles.stats}>
        {Object.entries(userData.stats).map(([label, quantity], index) => (
          <li key={index}>
            <span className={styles.label}>{label}</span>
            <span className={styles.quantity}>{quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default renderUserProfile;
