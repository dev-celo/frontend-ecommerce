import './hero.css';

function Hero() {
  return (
    <section id="hero" data-testid="hero" className="cont">
      <h4 id="trade-offer" data-testid="trade-offer">Trade-in-offer</h4>
      <h2 id="super-deals" data-testid="super-deals">Super value deals</h2>
      <h1 id="all-products" data-testid="all-products">On all products</h1>
      <p id="coupons" data-testid="coupons">Save more with coupons & up to 70% off!</p>
      <button id="shop-now" data-testid="shop-now">Shop Now</button>
    </section>
  );
}

export default Hero
