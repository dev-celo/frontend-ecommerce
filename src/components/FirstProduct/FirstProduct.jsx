import './firstProduct.css';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/productsContext';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import formatCurrency from '../../utilities/formatCurrency';
import { useShoppingCart } from '../context/shoppingCartContext';

export function FirstProduct(props) {
  const { increaseCartQuantity, cartItems } = useShoppingCart();
  const { setSelectedProduct } = useAppContext();
  const { products } = props;

  const handleProductClick = (index) => {
    setSelectedProduct(products[index])
    Cookies.set('SelectedProduct', JSON.stringify(products[index]))
  };

  return (
    <section id="product1" className="section-p1" >
      <h2>Featured Products</h2>
      <p>Summer Collection New Modern Design</p>
      <div className="pro-container">
        {products.map((product, index) => (
          <div className="pro" onClick={() => handleProductClick(index)} key={index} >
            <Link className="no-link-style" to={`product/${product.type}/${index}`} >
              <img src={product.imgSrc} alt={product.title} />
              <div className="des">
                <span>{product.brand}</span>
                <h5>{product.title}</h5>
                <div className="star">
                  {[...Array(product.rating)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                </div>
                <h4>{formatCurrency(product.price)}</h4>
              </div>
            </Link>
            <FontAwesomeIcon onClick={() => {
              increaseCartQuantity(product.id)
              cartItems(product.id, product.type)
            }} className="cart" icon="shopping-cart" />
          </div>
        ))}
      </div>
    </section>
  );
}

FirstProduct.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
      details: PropTypes.string,
    })
  ).isRequired,
};
