import './feature.css';

function Feature({ features}) {
    return (
        <section id="feature" data-testid="feature" className="section-p1">
            {
                features.map((feature) => (
                        <div key={ feature.key } className="fe-box">
                            <img src={ feature.imgSrc } alt={ feature.altText } />
                            <h6>{feature.altText}</h6>
                        </div>
                    )
                )
            }
        </section>
    );
}

export default Feature
