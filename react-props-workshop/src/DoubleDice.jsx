export default function DoubleDice() {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;
  const isWinner = num1 == num2;
  const styles = {color: isWinner ? 'purple' : 'blue'};
  return (
    <div className="DoubleDice" style={styles}>
      <h1>Double Dice</h1>
      {isWinner && <h2>You Win!</h2>}
      <p>Num1: {num1}</p>
      <p>Num2: {num2}</p>
    </div>
  );
}
