import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

function DetailsProduct() {
    return (
        <section id="details-page" data-testid="details-page">
            <Header />
            <ProductDetail />
            <Footer />
        </section>
    )
}

export default DetailsProduct;