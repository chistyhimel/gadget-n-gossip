import React from "react";
import Banner from "../components/Banner/Banner.component";
import Categories from "../components/Categories/Categories.component";
import FlashDeal from "../components/FlashDeal/FlashDeal.component";
import InstagramPost from "../components/InstagramPost/InstagramPost.component";
import PaymentOptions from "../components/PaymentOptions/PaymentOptions.component";
import ProductCard from "../components/ProductCard/ProductCard.component";

function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <FlashDeal />

      <ProductCard />

      <InstagramPost />
      <PaymentOptions />
    </>
  );
}

export default Home;
