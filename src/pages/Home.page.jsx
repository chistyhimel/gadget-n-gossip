import React from "react";
import AdSection from "../components/AdSection/AdSection.component";
import Banner from "../components/Banner/Banner.component";
import BestSellingProducts from "../components/BestSellingProducts/BestSellingProducts.component";
import Categories from "../components/Categories/Categories.component";
import CategoryProducts from "../components/CategoryProducts/CategoryProducts.component";
import FlashDeal from "../components/FlashDeal/FlashDeal.component";
import InstagramPost from "../components/InstagramPost/InstagramPost.component";
import PaymentOptions from "../components/PaymentOptions/PaymentOptions.component";
import SocialMediaSection from "../components/SocialMediaSection/SocialMediaSection.component";
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
      <AdSection />
      <BestSellingProducts />
      <SocialMediaSection />
      <InstagramPost />
      <PaymentOptions />
    </>
  );
}

export default Home;
