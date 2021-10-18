import Footer from "./Components/Footer/Footer"; 
import Homepage from "./Pages/Homepage/Homepage";
import CommingSoon from "./Components/CommingSoon/CommingSoon";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <Router> 
      <Menu/>
      <Switch>
        <Route exact path="/">
            <Homepage />
        </Route>
        <Route path="/about">
            <CommingSoon title='Giới thiệu' />
        </Route>
        <Route path="/news">
            <CommingSoon title='Tin tức'/>
        </Route>
        <Route path="/contact">
            <CommingSoon title='Liên hệ'/>
        </Route>
      </Switch>
      <Footer/> 
    </Router>
  );
}

export default App;
