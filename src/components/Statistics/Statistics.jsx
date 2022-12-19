import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export const Statistics = ({ stats }) => {
    return (
      <section className={style.statistics}>
        <ul className={style.list}>
          {stats.map(({ id, label, percentage }) => (
            <li className={style.item} key={id}>
              <span className={style.label}>{label}</span>
              <span className={style.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }))
  };