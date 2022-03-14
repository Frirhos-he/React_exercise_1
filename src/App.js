import "./styles.css";
import {useCallback, useMemo, useState} from "react";

import ChallengeDescription from "./challengeDescription";
import ExpensesCard from "./expensesCard";
//imported libraries
/*with redux
import { actions, selectors } from "../../redux-store";
import { useDispatch, useSelector } from "react-redux";
 */
//without redux

export default function App() {
  const [expenses, setExpenses] = useState([]);

  /* SCRIVI QUI IL TUO CODICE */
    const [item, setNewItem] = useState('');


    const onSubmit = useCallback((e) => {

      e.preventDefault();
      console.log(typeof item);

      const number = parseFloat(item);
      console.log(number);

      if(!isNaN(number))
        setExpenses([...expenses, number]); //if number was the one I meant to change I would have put => to directly modify its value with
      //no other dependencies

        setNewItem('');

    }, [item]);


    const handleAverage = useMemo(() => {

      const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length; // prev current, initial value

      const result = average(expenses);
      if (isNaN(result)) return 0;
      else
      return result.toFixed(2).replace(".", ",");

    },[expenses]);

    const handleItemChange = useCallback((event) => {
        setNewItem(event.target.value); //item is the text written in real time
    }, []);



    return (
    <div className="App">
      <ChallengeDescription />
      <div>
        <form onSubmit={onSubmit}>
          <input name="expense" value={item} placeholder="Quanti paperoni hai speso..." onChange={handleItemChange}/>
          <button type="submit">Aggiungi</button>
        </form>
      </div>
      <div>
        <h2>Media:{handleAverage}</h2>
      </div>
      <h2>Spese</h2>
      {expenses.map((amount,index) => (
        <ExpensesCard key={index} amount={amount} />
      ))}
    </div>
  );
}
