import List from "./list";
import "./App.css";
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
      <List fruits={FRUITS} name="collection of fruits" id="5" />
    </div>
  );
}

export default App;
