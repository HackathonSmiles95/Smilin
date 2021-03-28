import { HashRouter } from "react-router-dom";

import Content from "../components/layout/content/content";
import Menu from "../components/common/menu/menu";
import Routes from "./routes";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <Menu />
          <Content>
            <Routes />
          </Content>
        </header>
      </div>
    </HashRouter>
  );
}

export default App;
