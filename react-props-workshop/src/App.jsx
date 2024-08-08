import './App.css';
import ListPicker from './ListPicker.jsx';
import DoubleDice from './DoubleDice.jsx';
import Heading from './Heading.jsx';
import ColorList from './ColorList.jsx';
import SlotMachine from './SlotMachine.jsx';

function App() {
  return (
    <div>
      {/* <Heading color="Orange" text="Welcome!" fontSize="20px"></Heading>
      <Heading color="teal" text="Welcome!" fontSize="48px"></Heading>
      <DoubleDice></DoubleDice>
      <DoubleDice></DoubleDice>
      <ColorList colors={['red', 'pink', 'purple', 'teal']}></ColorList>
      <ColorList colors={['yellow', 'olive', 'orangered', 'black']}></ColorList> */}
      <SlotMachine val1="🍒" val2="🍒" val3="🍒"></SlotMachine>
    </div>
  );
}

export default App;
