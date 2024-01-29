import './feature.css';
import { features } from './featureData';

function Feature() {
    console.log(features);
    return (
        <section id="feature" className="section-p1">
            <div className="fe-box">
                <img src="img/features/f1.png" alt="" />
                <h6>Free Shipping</h6>
            </div>

            <div className="fe-box">
                <img src="img/features/f2.png" alt="" />
                <h6>Online Order</h6>
            </div>

            <div className="fe-box">
                <img src="img/features/f3.png" alt="" />
                <h6>Save Money</h6>
            </div>

            <div className="fe-box">
                <img src="img/features/f4.png" alt="" />
                <h6>Promotions</h6>
            </div>

            <div className="fe-box">
                <img src="img/features/f5.png" alt="" />
                <h6>Happy Cell</h6>
            </div>

            <div className="fe-box">
                <img src="img/features/f6.png" alt="" />
                <h6>F24/7 Support</h6>
            </div>
        </section>
    );
}

export default Feature
