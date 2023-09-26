const friendsList = friendsData => {
  return (
    <ul className="friend-list">
      {friendsData.map(friend => (
        <li className="item" key={friend.id}>
          <span
            className={`${
              friend.isOnline ? 'status-online' : 'status-offline'
            }`}
          ></span>
          <img
            className="avatar-friend"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default friendsList;
