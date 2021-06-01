import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer.component";
import Navbar from "./components/Navbar/Navbar.component";
import StickyTotal from "./components/StickyTotal/StickyTotal.component";
import Home from "./pages/Home.page";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <StickyTotal />
        <Switch>
          <Route to="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
