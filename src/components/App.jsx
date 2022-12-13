import user from 'data/user.json';
import { Profile } from 'components/Profile/Profile';

import data from 'data/data.json';
import { Statistics } from 'components/Statistics/Statistics';




export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        margin: '0 auto',
        flexDirection:'column',
        gap:'10px'
      }}
    >
      React homework template

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics stats={data} />

    </div>
  );
};
