import PropTypes from 'prop-types';
import './productDetail.css';
import { useAppContext } from '../context/productsContext';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';
import { shirts, others } from '../data/productsData';
import { useShoppingCart } from '../context/shoppingCartContext';

// eslint-disable-next-line react-hooks/exhaustive-deps
const productTypes = {
    shirts,
    others
};
function ProductDetail() {
    const { increaseCartQuantity, cartItems } = useShoppingCart();
    const { selectedProduct, setSelectedProduct } = useAppContext();
    const { id, typeProduct } = useParams();
    
    useEffect(() => {
        const storedSelectedProduct = Cookies.get('SelectedProduct');

        window.scrollTo(0, 0); // Isso rolará a página para o topo quando o componente for montado

        if (productTypes[typeProduct]) {
            const product = productTypes[typeProduct][id];
            if (product) {
                setSelectedProduct(existingProduct => (
                    existingProduct && existingProduct.id === product.id ? existingProduct : product
                ));

                if (storedSelectedProduct && product.id === JSON.parse(storedSelectedProduct).id) {
                    return setSelectedProduct(JSON.parse(storedSelectedProduct));
                }
            }
        }
    }, [id, setSelectedProduct, typeProduct]);

    if (!selectedProduct) {
        return <p>Selecione um produto para ver os detalhes.</p>;
    }

    const imgSrcFromCookie = selectedProduct.imgSrc.replace('.', '') || (Cookies.getJSON('SelectedProduct') && JSON.parse(Cookies.get('SelectedProduct')).imgSrc).replace('.', '');

    return (
        <section id="prodetails" className="section-p1">
            <div className="single-pro-img">
                <img src={`/ecommerce/public/${imgSrcFromCookie}`} width="100%" id="MainImage" alt={selectedProduct.title} />
                <div className="small-img-group">
                    <div className="small-img-col">
                        <img src={`/ecommerce/public/${imgSrcFromCookie}`} width="100%" className="small-img" alt={ selectedProduct.title } />
                    </div>

                    <div className="small-img-col">
                        <img src={`/ecommerce/public/${imgSrcFromCookie}`} width="100%" className="small-img" alt={ selectedProduct.title } />
                    </div>

                    <div className="small-img-col">
                        <img src={`/ecommerce/public/${imgSrcFromCookie}`} width="100%" className="small-img" alt={ selectedProduct.title } />
                    </div>

                    <div className="small-img-col">
                        <img src={`/ecommerce/public/${imgSrcFromCookie}`} width="100%" className="small-img" alt={ selectedProduct.title } />
                    </div>
                </div>
            </div>

            <div className="single-pro-details">
                <h6>{selectedProduct.title}</h6>
                <h4>{selectedProduct.brand}</h4>
                <h2>{selectedProduct.price}</h2>
                <select name="#" id="">
                    <option >Select Size</option>
                    <option >XL</option>
                    <option >XXL</option>
                    <option >Small</option>
                    <option >Large</option>
                </select>
                <input type="number" value="1" />
                <button onClick={() => {
                    cartItems(selectedProduct.id, selectedProduct.type)
                    increaseCartQuantity(selectedProduct.id)
                }} className="normal">Add To Cart</button>
                <h4>Product Details</h4>
                <span>{selectedProduct.details}</span>
            </div>
        </section>
    )
}

// Adicionando PropTypes para as props
ProductDetail.propTypes = {
    product: PropTypes.shape({
        type: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        price: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
    }),
};

export default ProductDetail