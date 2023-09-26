// *WITH DATA
const renderUserProfile = userData => {
  return (
    <div className="profile">
      <div className="description">
        <img src={userData.avatar} alt="User avatar" className="avatar" />
        <p className="name">{userData.username}</p>
        <p className="tag">{'@' + userData.tag}</p>
        <p className="location">{userData.location}</p>
      </div>

      <ul className="stats">
        {Object.entries(userData.stats).map(([label, quantity], index) => (
          <li key={index}>
            <span className="label">{label}</span>
            <span className="quantity">{quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default renderUserProfile;
