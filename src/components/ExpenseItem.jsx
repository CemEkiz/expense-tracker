import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = props => {
  return (
    <div className='expense-item'>
      <ExpenseDate calendar={props.date} />
      <div className='expense-item__description'>
        <h2>{props.name}</h2>
        <div className='expense-item__price'>${props.price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
