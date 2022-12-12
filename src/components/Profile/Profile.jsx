import PropTypes from 'prop-types';
import style from './Profile.module.css';

export const Profile = ({username, tag, location, avatar, stats: { followers, views, likes },}) => {
    return (
        <div className={style.profile}>
          <div className={style.description}>
            <img src={avatar} alt="user avatar" className={style.avatar} />
            <p className={style.userName}>{username}</p>
            <p className={style.tag}>@{tag}</p>
            <p className={style.location}>{location}</p>
          </div>
          <ul className={style.stats}>
            <li className={style.statsList}>
              <span className={style.category}>Followers</span>
              <span className={style.value}>{followers}</span>
            </li>
            <li className={style.statsList}>
              <span className={style.category}>Views</span>
              <span className={style.value}>{views}</span>
            </li>
            <li className={style.statsList}>
              <span className={style.category}>Likes</span>
              <span className={style.value}>{likes}</span>
            </li>
          </ul>
        </div>
      );
    };

  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
        }),
  };