import "./App.css";
import Button from "./components/Button";
import Toggle from "./components/Toogle";
import TextMirror from "./components/TextMirror";
import HoverBox from "./components/HoverBox";
import TrafficLight from "./components/TrafficLight";
import TodoList from "./components/TodoList";

import { FaReact, FaCode, FaMagic } from "react-icons/fa";

function App() {
  return (
    <div className="app">
      <div className="overlay"></div>

      <header className="hero">
        <div className="hero-badge">
          <FaReact className="hero-icon spin" />
          <span>React Practice • Day 2</span>
        </div>

        <h1>React Assignments Day-2</h1>      
      </header>

      <section className="section">
        <div className="section-heading">
          {/* <span className="section-badge">Core Concept</span> */}
          <h2 className="section-title">1. Props</h2>
        </div>

        <div className="button-row">
          <Button label="Click Me" color="linear-gradient(135deg, #7c3aed, #a855f7)" />
          <Button label="Submit" color="linear-gradient(135deg, #16a34a, #22c55e)" />
          <Button label="Delete" color="linear-gradient(135deg, #dc2626, #ef4444)" />
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