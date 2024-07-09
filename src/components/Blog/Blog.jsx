import './blog.css';
import { postsData } from '../data/postsData';
import { Link } from 'react-router-dom';


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
                                <Link to={`/frontend-ecommerce/blog/${post.id}`}>CONTINUE READING</Link>
                            </div>
                            <h1>{post.date}</h1>
                        </div>
                    ))
                }
            </section>

            {/* Aqui precisarei de uma paginação */}
        </>
    );
};

export default BlogPage;
