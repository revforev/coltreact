import './App.css';
import LuckyN from './LuckyN';

function App() {
  return (
    <>
      <LuckyN></LuckyN>
      <LuckyN numDice={3} goal={11}></LuckyN>
    </>
  );
}

export default App;
