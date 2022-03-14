export default (props) => {
  const { amount } = props;

  return (

      <div className="expensesCard">
        <span>€ {amount.toFixed(2).replace(".", ",")}</span>
    </div>
  );
};
