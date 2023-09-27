import user from '../components/1st-task/user.json';
import data from '../components/2nd-task/data.json';
import friends from '../components/3rd-task/friends.json';
import transaction from '../components/4th-task/transactions.json';
import renderUserProfile from './1st-task/SocialNetworkProfile';
import statistic from './2nd-task/StatisticSection';
import FriendsList from './3rd-task/FriendList';
import transactionRender from './4th-task/TransactionHistory';

export const App = () => {
  return (
    <>
      {/* classes from index.css */}
      <div className="prof">
        {renderUserProfile(user)}
        <div className="frien">
          {friends.map(friends => {
            return <FriendsList {...friends} />;
          })}
        </div>
      </div>
      <section className="statistics">
        <h2 className="title">Upload stats</h2>
        {statistic(data)}
      </section>
      {transactionRender(transaction)}
    </>
  );
};
