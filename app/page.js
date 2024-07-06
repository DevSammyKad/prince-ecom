import Brands from "@/_components/home/Brands";
import Banner from "@/_components/home/Banner";
import Occasion from "@/_components/home/Occasion";
import Category from "@/_components/home/Category";
import Product from "@/_components/home/Product";
import DealOfTheDay from "@/_components/home/DealOfTheDay";
import Header from "@/_components/header";
import { mainNav } from "@/config/nav";

export default function Home() {
  return (
    <div>
      <Header navItems={mainNav} isSearch={true} />
      <Banner />
      <Category />
      <Brands />
      <Occasion />
      <Product />
      <DealOfTheDay />
    </div>
  );
}
