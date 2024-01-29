import PropTypes from 'prop-types';
import './productDetail.css';

function ProductDetail(props) {
    // eslint-disable-next-line react/prop-types
    const { product } = props;

    if (!product) {
        // Lida com o caso em que não há nenhum produto selecionado
        return <p>Selecione um produto para ver os detalhes.</p>;
    }

    return (
        <section id="prodetails" className="section-p1">
            <div className="single-pro-img">
                <img src={product.imgSrc} width="100%" id="MainImage" alt={product.title} />
                    <div className="small-img-group">
                        <div className="small-img-col">
                            <img src="./src/img/products/f2.jpg" width="100%" className="small-img" alt="" />
                        </div>

                        <div className="small-img-col">
                            <img src="./src/img/products/f3.jpg" width="100%" className="small-img" alt="" />
                        </div>

                        <div className="small-img-col">
                            <img src="./src/img/products/f4.jpg" width="100%" className="small-img" alt="" />
                        </div>

                        <div className="small-img-col">
                            <img src="./src/img/products/f5.jpg" width="100%" className="small-img" alt="" />
                        </div>
                    </div>
            </div>

            <div className="single-pro-details">
                <h6>{product.title}</h6>
                <h4>{product.brand}</h4>
                <h2>{product.price}</h2>
                <select name="#" id="">
                    <option >Select Size</option>
                    <option >XL</option>
                    <option >XXL</option>
                    <option >Small</option>
                    <option >Large</option>
                </select>
                <input type="number" value="1" />
                    <button className="normal">Add To Cart</button>
                    <h4>Product Details</h4>
                    <span>{product.details}</span>
            </div>
        </section>
    )
}

// Adicionando PropTypes para as props
ProductDetail.propTypes = {
    product: PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
      // Adicione outras props conforme necessário
    }),
  };

export default ProductDetail