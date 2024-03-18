import './doubleBanner.css';

export function DoubleBanner() {
  return (
    <section id="double-banner" className="section-p1" data-testid="double-banner">
      <div className="banner-box" data-testid="banner-box-1" id="banner-box-1">
        <h4 data-testid="banner-title-1">Craze deals</h4>
        <h2 data-testid="banner-subtitle-1">Buy 1 get 1 free</h2>
        <span data-testid="banner-description-1">The best classNameic dress in on sale at cara</span>
        <button className="white" data-testid="banner-button-1">Learn More</button>
      </div>
      <div className="banner-box banner-box2" data-testid="banner-box-2" id="banner-box-2">
        <h4 data-testid="banner-title-2">spring/summer</h4>
        <h2 data-testid="banner-subtitle-2">Upcomming season</h2>
        <span data-testid="banner-description-2">The best classNameic dress in on sale at cara</span>
        <button className="white" data-testid="banner-button-2">Collection</button>
      </div>
    </section>
  );
}