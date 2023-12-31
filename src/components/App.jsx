// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import { Profile } from '../components/Profile/Profile';
import user from '../user.json';

import { Statistics } from 'components/Statistics/Statistics';
import data from '../data.json';

import { FriendList } from 'components/FriendList/FriendList';
import friends from '../friends.json';

import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';
import { TriedToRenameIt } from './GLobalStyle';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      < TriedToRenameIt />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};