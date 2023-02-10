import { ThemeProvider } from "styled-components";
import "./App.css";
import EventHandler from "./topics/eventHandler";
import ClassEventButton from "./topics/eventHandler/classeventbutton";
import CustomStyled from "./topics/styled";
import { themes } from "./topics/themes";

function App() {
  return (
    <div className="container  p-5">
      <ThemeProvider theme={themes}>
        <EventHandler />
        <ClassEventButton />
        <CustomStyled />
      </ThemeProvider>
    </div>
  );
}

export default App;
