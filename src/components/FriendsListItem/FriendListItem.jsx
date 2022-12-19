import PropTypes from 'prop-types';
import style from './FriendsListItem.module.css';

export const FriendListItem = ({avatar, name, isOnline }) => {
  return (
    <li className={style.friendItem}>
      <span className={isOnline ? style.active : style.status}></span>
      <img className={style.friendAvatar} src={avatar} alt="user avatar" width="40" />
      <p className={style.friendName}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};