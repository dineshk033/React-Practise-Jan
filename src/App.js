import List from "./list";
import "./App.css";
import EventHandler from "./topics/eventHandler";
const FRUITS = [
  "Apple",
  "Kiwi",
  "Pomo",
  "Grapes",
  "pineapple",
  "Gova",
  "Apple",
];
function App() {
  return (
    <div className="container  p-5">
      <EventHandler />
      <List fruits={FRUITS} name="collection of fruits" id="5" />
    </div>
  );
}

export default App;
