import './blog.css';
import { postsData } from '../data/postsData';

const BlogPage = () => {
    return (
        <>
            <section id="blog">
                {
                    postsData.map((post, index) => (
                        <div key={`${post.title}-${index}`} className="blog-box">
                            <div className="blog-img">
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="blog-details">
                                <h4>{post.title}</h4>
                                <p>{post.description}</p>
                                <a href="#">CONTINUE READING</a>
                            </div>
                            <h1>{post.date}</h1>
                        </div>
            ))
        }
        </section>

            <section id="pagination" className="section-p1">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#"><i className="fas fa-long-arrow-alt-right"></i></a>
            </section>
        </>
    );
};

export default BlogPage;
