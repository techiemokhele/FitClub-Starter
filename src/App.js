import "./App.css";
import {
  Hero,
  Programs,
  Reasons,
  Plans,
  Testimonials,
  Join,
} from "./components";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
    </div>
  );
}

export default App;
