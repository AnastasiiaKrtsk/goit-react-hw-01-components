import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transaction from './transactions.json';
import renderUserProfile from './Social-network-profile';
import statistic from './Statistic-section';
import friendsList from './Friend-list';
import transactionRender from './Transaction-History';

export const App = () => {
  return (
    <>
      <div className="prof">
        {renderUserProfile(user)}
        <div className="frien">{friendsList(friends)}</div>
      </div>
      <section className="statistics">
        <h2 className="title">Upload stats</h2>
        {statistic(data)}
      </section>
      {transactionRender(transaction)}
    </>
  );
};
