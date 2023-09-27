// *WITH PROPS
//! how to write if class with '-' >>> {styles['friend-list']}
import styles from './FriendList.module.css';
const FriendsList = ({ avatar, name, isOnline, id }) => {
  return (
    <ul className={styles['friend-list']}>
      <li className={styles.item} key={id}>
        <span
          className={
            isOnline ? styles['status-online'] : styles['status-offline']
          }
        ></span>
        <img
          className={styles.avatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className={styles.name}>{name}</p>
      </li>
    </ul>
  );
};
export default FriendsList;
