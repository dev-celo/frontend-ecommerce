import { Banner } from "../../components/BannerDiscount/Banner";
import { DoubleBanner } from "../../components/DoubleBanner/DoubleBanner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import {  shirts, others } from "../../components/data/productsData";

function Shopping() {
    return (
        <>
            <Header />
            <Banner />
            <ProductCard products={others} />
            <DoubleBanner />
            <ProductCard products={shirts} />
            <Footer />
        </>
    )
}

export default Shopping;