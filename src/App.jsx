import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer.component";
import Navbar from "./components/Navbar/Navbar.component";
import StickyTotal from "./components/StickyTotal/StickyTotal.component";
import Home from "./pages/Home.page";
import Products from "./pages/Products.page";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <StickyTotal />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
