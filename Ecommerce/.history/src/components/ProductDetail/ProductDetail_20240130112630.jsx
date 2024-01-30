import PropTypes from 'prop-types';
import './productDetail.css';
import { useAppContext } from '../../../context/productsContext';

function ProductDetail() {
    const { selectedProduct } = useAppContext();
    console.log(selectedProduct);

    if (!selectedProduct) {
        // Lida com o caso em que não há nenhum produto selecionado
        return <p>Selecione um produto para ver os detalhes.</p>;
    }

    return (
        <section id="prodetails" className="section-p1">
            <div className="single-pro-img">
                <img src={selectedProduct.imgSrc} width="100%" id="MainImage" alt={selectedProduct.title} />
                    <div className="small-img-group">
                        <div className="small-img-col">
                            <img src={selectedProduct.imgSrc} width="100%" className="small-img" alt="desc1" />
                        </div>

                        <div className="small-img-col">
                            <img src={selectedProduct.imgSrc} width="100%" className="small-img" alt="desc 2" />
                        </div>

                        <div className="small-img-col">
                            <img src={selectedProduct.imgSrc} width="100%" className="small-img" alt="desc 3" />
                        </div>

                        <div className="small-img-col">
                            <img src={selectedProduct.imgSrc} width="100%" className="small-img" alt="desc 4" />
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
                    <button className="normal">Add To Cart</button>
                    <h4>Product Details</h4>
                    <span>{selectedProduct.details}</span>
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