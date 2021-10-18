import Footer from "./Components/Footer/Footer"; 
import Homepage from "./Pages/Homepage/Homepage";
import CommingSoon from "./Components/CommingSoon/CommingSoon";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import Products from "./Pages/Products/Products";
import News from "./Pages/News/News";

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
            <News/>
        </Route>
        <Route path="/products">
            <Products/>
        </Route> 
      </Switch>
      <Footer/> 
    </Router>
  );
}

export default App;
