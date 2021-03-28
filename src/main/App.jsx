import { HashRouter } from "react-router-dom";

import StyleContents from "../styles/contents.styles";

import Content from "../components/layout/content/content";
import Menu from "../components/common/menu/menu";
import Routes from "./routes";

function App() {
  return (
    <HashRouter>
      <main style={StyleContents.main}>
        <Menu />
        <Content>
          <Routes />
        </Content>
      </main>
    </HashRouter>
  );
}

export default App;
