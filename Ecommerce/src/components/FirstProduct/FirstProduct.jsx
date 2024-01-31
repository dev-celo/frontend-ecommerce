import './firstProduct.css';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../../context/productsContext';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

export function FirstProduct(props) {
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
            <Link className="no-link-style" to={`/product/${index}`} >
              <img src={product.imgSrc} alt={product.title} />
              <div className="des">
                <span>{product.brand}</span>
                <h5>{product.title}</h5>
                <div className="star">
                  {[...Array(product.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <h4>{product.price}</h4>
              </div>
              <a href="#"><i className="fas fa-shopping-cart cart"></i></a>
            </Link>
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
