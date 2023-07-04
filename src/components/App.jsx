// import React from "react";
// import ReactDOM from "react-dom/client";

import { Profile } from './profile/Profile';
import profileUser from '../data/profileUser.json';

import { Statistics } from './statistics/Statistics';
import statisticsData from '../data/statisticsData.json';

import { FriendList } from './friend-list/FriendList';
import friendsData from '../data/friendsData.json';

import { TransactionHistory } from './transaction-history/TransactionHistory';
import transactionsData from '../data/transactionsData.json';

export const App = () => {
  return (
    <>
      <Profile
        username={profileUser.username}
        tag={profileUser.tag}
        location={profileUser.location}
        avatar={profileUser.avatar}
        stats={profileUser.stats}
      />
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />;
    </>
  );
};

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
