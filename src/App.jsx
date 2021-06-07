import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer.component";
import Navbar from "./components/Navbar/Navbar.component";
import StickyTotal from "./components/StickyTotal/StickyTotal.component";
import Home from "./pages/Home.page";
import Products from "./pages/Products.page";
import AdSection from "./components/AdSection/AdSection.component";
import BestSellingProducts from "./components/BestSellingProducts/BestSellingProducts.component";
import SocialMediaSection from "./components/SocialMediaSection/SocialMediaSection.component";
import InstagramPost from "./components/InstagramPost/InstagramPost.component";
import PaymentOptions from "./components/PaymentOptions/PaymentOptions.component";
import ProductDetails from "./pages/ProductDetails.page";

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
          <Route exact path="/product" component={ProductDetails} />
        </Switch>
        <AdSection />
        <BestSellingProducts />
        <SocialMediaSection />
        <InstagramPost />
        <PaymentOptions />
        <Footer />
      </Router>
    </>
  );
}

export default App;
