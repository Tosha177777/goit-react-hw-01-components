import css from './css/Profile.module.css';

const Profile = props => {
  const { username, tag, location, avatar, stats } = props;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={css.avatar}
          width={100}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.itemStats}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}> {stats.followers} </span>
        </li>
        <li className={css.itemStats}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}> {stats.views}</span>
        </li>
        <li className={css.itemStats}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}> {stats.likes} </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
