import "./App.css";
import Button from "./components/Button";
import Toggle from "./components/Toogle";
import TextMirror from "./components/TextMirror";
import HoverBox from "./components/HoverBox";
import TrafficLight from "./components/TrafficLight";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="app">
      <div className="overlay"></div>

      <header className="hero">
        <p className="tag">React Practice • Day 2</p>
        <h1>React Assignments Showcase</h1>
        <p className="subtitle">
          Props, State, Events, Conditional Rendering and Lists — all in one clean project.
        </p>
      </header>

      <section className="section">
        <h2 className="section-title">1. Props</h2>
        <div className="button-row">
          <Button label="Click Me" color="purple" />
          <Button label="Submit" color="green" />
          <Button label="Delete" color="red" />
        </div>
      </section>

      <div className="grid">
        <Toggle />
        <TextMirror />
        <HoverBox />
        <TrafficLight color="red" />
        <TrafficLight color="yellow" />
        <TrafficLight color="green" />
        <TodoList />
      </div>
    </div>
  );
}

export default App;