import Profile from './Profile';
import Statistics from './Statistics';
import FriendsList from './FriendList';
import TransactionHistory from './TransactionHistory';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
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
      <TransactionHistory
        key={transactions.map(({ id }) => id)}
        items={transactions}
      />
    </div>
  );
};

export default App;
