import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
      <table className={style.transaction}>
        <thead>
          <tr>
            <th className={style.transactionName}>Type</th>
            <th className={style.transactionName}>Amount</th>
            <th className={style.transactionName}>Currency</th>
          </tr>
        </thead>
  
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td className={style.transactionItem}>{type}</td>
              <td className={style.transactionItem}>{amount}</td>
              <td className={style.transactionItem}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
  };