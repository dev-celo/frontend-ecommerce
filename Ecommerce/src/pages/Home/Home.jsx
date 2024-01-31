import { Banner } from "../../components/BannerDiscount/Banner";
import { DoubleBanner } from "../../components/DoubleBanner/DoubleBanner";
import Feature from "../../components/Feature/Feature";
import { FirstProduct } from "../../components/FirstProduct/FirstProduct";
import { Footer } from "../../components/Footer/Footer";
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero";
import { SmallBaners } from "../../components/SmallBanners/SmallBanners";
import { products, products2 } from "../../components/data/productsData";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <FirstProduct products={products} />
      <Banner />
      <FirstProduct products={products2} />
      <DoubleBanner />
      <SmallBaners />
      <Footer />
    </>
  )
}

export default Home;
