import React from "react";
import Banner from "../components/Banner/Banner.component";
import BestSellingProducts from "../components/BestSellingProducts/BestSellingProducts.component";
import Categories from "../components/Categories/Categories.component";
import CategoryProducts from "../components/CategoryProducts/CategoryProducts.component";
import FlashDeal from "../components/FlashDeal/FlashDeal.component";
import WholesellFacilities from "../components/WholesellFacilities/WholesellFacilities.component";

function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <FlashDeal />
      <BestSellingProducts />
      <WholesellFacilities />
      <CategoryProducts />
    </>
  );
}

export default Home;
