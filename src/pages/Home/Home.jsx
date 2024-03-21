import { Banner } from "../../components/BannerDiscount/Banner";
import { DoubleBanner } from "../../components/DoubleBanner/DoubleBanner";
import Feature from "../../components/Feature/Feature";
import ProductCard from "../../components/ProductCard/ProductCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero";
import { SmallBaners } from "../../components/SmallBanners/SmallBanners";
import {  shirts, others } from "../../components/data/productsData";
import { features } from "../../components/data/featureData";

function Home() {
  return (
    <section id="home-page" data-testid="home-page">
      <Header />
      <Hero />
      <Feature features={ features } />
      <ProductCard products={shirts} />
      <Banner />
      <ProductCard products={others} />
      <DoubleBanner />
      <SmallBaners />
      <Footer />
    </section>
  )
}

export default Home;
