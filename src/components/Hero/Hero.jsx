import './hero.css';

function Hero() {
  return (
    <section id="hero" data-testid="hero" className="cont">
      <h4 id="trade-offer" data-testid="trade-offer">LEVE UM POUCO</h4>
      <h2 id="super-deals" data-testid="super-deals"> Do INTERIOR CACAUREIRO BAIANO</h2>
      <h1 id="all-products" data-testid="all-products">PARA SUA CASA!</h1>
      <p id="coupons" data-testid="coupons">CHOCOLATE PRODUZIDO EM IPIAÚ-BA</p>
      <button id="shop-now" data-testid="shop-now">COMPRAR AGORA!</button>
    </section>
  );
}

export default Hero
