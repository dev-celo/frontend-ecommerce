import './feature.css';
import { features } from './featureData';

function Feature() {
    return (
        <section id="feature" className="section-p1">
            {
                features.map((feature) => (
                        <div key={ feature.key } className="fe-box">
                            <img src={ feature.imgSrc } alt={ feature.altText } />
                            <h6>Free Shipping</h6>
                        </div>
                    )
                )
            }
        </section>
    );
}

export default Feature
