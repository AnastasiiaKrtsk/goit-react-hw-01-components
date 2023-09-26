// *WITH PROPS
const FriendsList = ({ avatar, name, isOnline, id }) => {
  return (
    <ul className="friend-list">
      <li className="item" key={id}>
        <span
          className={`${isOnline ? 'status-online' : 'status-offline'}`}
        ></span>
        <img
          className="avatar-friend"
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{name}</p>
      </li>
    </ul>
  );
};
export default FriendsList;
