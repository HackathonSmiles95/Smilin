import "./app.css";
import Menu from "../components/templates/menu/menu";
import Content from "../components/layout/content/content";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <Menu />
          <Content />
        </header>
      </div>
    </HashRouter>
  );
}

export default App;
