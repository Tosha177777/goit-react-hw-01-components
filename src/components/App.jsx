import Profile from './Profile';
import Statistics from './Statistics';
import FriendsList from './FriendList';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        key={data.map(({ id }) => id)}
        title="Upload stats"
        stats={data}
      />
      {/* <Statistics stats={data} /> */}
      <FriendsList friends={friends} />
    </div>
  );
};

export default App;
