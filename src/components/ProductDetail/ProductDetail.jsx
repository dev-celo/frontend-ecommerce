import PropTypes from 'prop-types';
import './productDetail.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { shirts, others } from '../data/productsData';
import { useShoppingCart } from '../context/shoppingCartContext';
import formatCurrency from '../../utilities/formatCurrency';

function ProductDetail() {
    const { increaseCartQuantity, listShoppingCart, selectedSize, setSizeProduct } = useShoppingCart();
    const { id, typeProduct } = useParams();
    const [productQuantity, setProductQuantity] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState({})

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            try {
                let productsData;
                if (typeProduct === 'shirts') {
                    productsData = shirts;
                } else if (typeProduct === 'others') {
                    productsData = others;
                }
                const product = productsData.find(product => product.id === parseInt(id));
                setSelectedProduct(product);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchData();
    }, [id, setSelectedProduct, typeProduct]);

    if (!selectedProduct) {
        return <p>Selecione um produto para ver os detalhes.</p>;
    }

    const handleInputChange = (event) => {
        const valor = parseInt(event.target.value);
        setProductQuantity(valor);
    }

    const handleSizeChange = (event) => {
        setSizeProduct(event.target.value);
    };

    return (
        <section id="prodetails" className="section-p1">
            <div className="single-pro-img">
                <img src={selectedProduct.imgSrc} width="100%" id="MainImage" alt={selectedProduct.title} />
                <div className="small-img-group">
                    <div className="small-img-col">
                        <img src={selectedProduct.imgSrc} width="100%" className="small-img" alt={selectedProduct.title} />
                    </div>
                    <div className="small-img-col">
                        <img src={selectedProduct.imgSrc} width="100%" className="small-img" alt={selectedProduct.title} />
                    </div>
                    <div className="small-img-col">
                        <img src={selectedProduct.imgSrc} width="100%" className="small-img" alt={selectedProduct.title} />
                    </div>
                    <div className="small-img-col">
                        <img src={selectedProduct.imgSrc} width="100%" className="small-img" alt={selectedProduct.title} />
                    </div>
                </div>
            </div>

            <div className="single-pro-details">
                <h6>{selectedProduct.title}</h6>
                <h4>{selectedProduct.brand}</h4>
                <h2>{formatCurrency(selectedProduct.price)}</h2>
                <select name="size" id="size" value={selectedSize} onChange={handleSizeChange} >
                    <option>Select Size</option>
                    <option>XL</option>
                    <option>XXL</option>
                    <option>Small</option>
                    <option>Large</option>
                </select>
                <input
                    type="number"
                    value={productQuantity}
                    onChange={handleInputChange}
                />
                <button onClick={() => {
                    increaseCartQuantity(selectedProduct.id, productQuantity, selectedSize)
                    listShoppingCart(selectedProduct.id, selectedProduct.type)
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

export default ProductDetail;
