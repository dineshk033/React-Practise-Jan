import "./App.css";
import EventHandler from "./topics/eventHandler";
import ClassEventButton from "./topics/eventHandler/classeventbutton";

function App() {
  return (
    <div className="container  p-5">
      <EventHandler />
      <ClassEventButton />
    </div>
  );
}

export default App;
