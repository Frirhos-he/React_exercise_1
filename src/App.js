import "./styles.css";
import { useState } from "react";

import ChallengeDescription from "./challengeDescription";
import ExpensesCard from "./expensesCard";

export default function App() {
  const [expenses, setExpenses] = useState([15.4, 20]);

  /* SCRIVI QUI IL TUO CODICE */

  return (
    <div className="App">
      <ChallengeDescription />
      <div>
        <form>
          <input name="expense" />
          <button type="submit">Aggiungi</button>
        </form>
      </div>
      <div>
        <h2>Media: ...</h2>
      </div>
      <h2>Spese</h2>
      {expenses.map((amount) => (
        <ExpensesCard amount={amount} />
      ))}
    </div>
  );
}
