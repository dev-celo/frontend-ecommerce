import { Banner } from "../../components/BannerDiscount/Banner";
import { DoubleBanner } from "../../components/DoubleBanner/DoubleBanner";
import Feature from "../../components/Feature/Feature";
import { FirstProduct } from "../../components/FirstProduct/FirstProduct";
import { Footer } from "../../components/Footer/Footer";
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero";
import { SmallBaners } from "../../components/SmallBanners/SmallBanners";
import {  shirts, others } from "../../components/data/productsData";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <FirstProduct products={shirts} />
      <Banner />
      <FirstProduct products={others} />
      <DoubleBanner />
      <SmallBaners />
      <Footer />
    </>
  )
}

export default Home;
