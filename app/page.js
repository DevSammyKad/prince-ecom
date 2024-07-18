import Brands from "@/_components/home/Brands";
import Banner from "@/_components/home/Banner";
import Occasion from "@/_components/home/Occasion";
import Category from "@/_components/home/Category";
import Product from "@/_components/home/Product";
import DealOfTheDay from "@/_components/home/DealOfTheDay";
import Header from "@/_components/header";
import { mainNav, items } from "@/config/nav";
import { products } from "@/config/dummyData";
import Banner2 from "@/_components/home/Banner2";

export default function Home() {
  const kidsProducts = products.filter((product) => {
    return product.category.some((category) => category.name === "kids");
  });
  const trendingProducts = products.filter((product) => product.isTrending);
  return (
    <div>
      <Header navItems={mainNav} isSearch={true} />
      <Banner />
      <Category />
      <Occasion />
      <Product title={"Kids Special"} products={kidsProducts} />
      <Product title={"Trending Now"} products={trendingProducts} />
      <Product title={"All Products"} products={products} />
      <DealOfTheDay />
      <Banner2 />
      <Brands />
    </div>
  );
}
