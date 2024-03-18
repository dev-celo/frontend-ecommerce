import './banner.css';

export function Banner() {
  return (
    <section id="banner" className="section-m1" data-testid="banner">
      <h4 data-testid="banner-title">Repair Service</h4>
      <h2 data-testid="banner-subtitle">Up to <span>70% off</span> - All t-Shirt & Accessories</h2>
      <button className="normal" data-testid="banner-button">Explore More</button>
    </section>
  );
}