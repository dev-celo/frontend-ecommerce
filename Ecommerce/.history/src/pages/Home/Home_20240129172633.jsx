import { Banner } from "../../components/BannerDiscount/Banner";
import { DoubleBanner } from "../../components/DoubleBanner/DoubleBanner";
import { Feature } from "../../components/Feature/Feature";
import { FirstProduct } from "../../components/FirstProduct/FirstProduct";
import { Footer } from "../../components/Footer/Footer";
import Header from "../../components/Header/Header"
import { Hero } from "../../components/Hero/Hero";
import { SecondProduct } from "../../components/SecondProduct/SecondProduct";
import { SmallBaners } from "../../components/SmallBanners/SmallBanners";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <FirstProduct />
      <Banner />
      <SecondProduct />
      <DoubleBanner />
      <SmallBaners />
      <Footer />
    </>
  )
}

export default Home;
