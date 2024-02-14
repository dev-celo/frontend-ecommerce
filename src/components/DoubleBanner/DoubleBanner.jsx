import './doubleBanner.css';

export function DoubleBanner() {
  return (
    <section id="sm-banner" className="section-p1">
      <div className="banner-box">
        <h4>Craze deals</h4>
        <h2>Buy 1 get 1 free</h2>
        <span>The best classNameic dress in on sale at cara</span>
        <button className="white">Learn More</button>
      </div>
      <div className="banner-box banner-box2">
        <h4>spring/summer</h4>
        <h2>Upcomming season</h2>
        <span>The best classNameic dress in on sale at cara</span>
        <button className="white">Collection</button>
      </div>
    </section>
  );
}