import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = props => {
  return (
    <div className='expenses'>
      <ExpenseItem
        name={props.datas[0].title}
        price={props.datas[0].amount}
        date={props.datas[0].date}
      />
      <ExpenseItem
        name={props.datas[1].title}
        price={props.datas[1].amount}
        date={props.datas[1].date}
      />
      <ExpenseItem
        name={props.datas[2].title}
        price={props.datas[2].amount}
        date={props.datas[2].date}
      />
      <ExpenseItem
        name={props.datas[3].title}
        price={props.datas[3].amount}
        date={props.datas[3].date}
      />
    </div>
  );
};

export default Expenses;
