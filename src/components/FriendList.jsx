import css from './css/FriendsList.module.css';
import FriendListItem from './FriendListItem';

export default function FriendsList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return <FriendListItem key={friend.id} friend={friend} />;
      })}
    </ul>
  );
}
