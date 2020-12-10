import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Catalog from "./components/Catalog/catalog";
import Home from "./components/Home/home";
import About from "./components/About/about";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="App">
        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/catalog" exact component={Catalog}></Route>
            <Route path="/about" exact component={About}></Route>
          </Switch>

          <Footer>I Said YO!</Footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
