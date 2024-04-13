import './about.css';

function About() {
    return (
        <>
            <section id="page-header" className="about">

                <h2>#KnowUs</h2>
                <p>Come and discover the best xxxxx store</p>

            </section>

            <section id="about-head" className="section-p1">
                <img src="/ecommerce/img/about/a6.jpg" alt="Imagem de promoção do about" />

                <div>
                    <h2>Who We Are</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto odit excepturi officiis eligendi? Quam sint architecto aut reiciendis fugit eaque illo maiores molestiae ea blanditiis, eos tenetur dolores, pariatur sapiente.

                        <marquee width="100%">Buy 1 and take 2</marquee>
                    </p>

                </div>
            </section>

            <section id="about-app" className="section-p1">
                <h1>Download Our <a href="#">App</a></h1>
                <div className="video">
                    <video muted loop src="/ecommerce/img/about/1.mp4"></video>
                </div>
            </section>
        </>
    );
}

export default About;