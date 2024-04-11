import BlogDetails from '../../components/BlogDetail/BlogDetail';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

function BlogDetail() {
    return (
        <div>
            <div className="d-flex flex-column gap-3">
                <Header />
                <BlogDetails />
            </div>
            <Footer />
        </div>
    )
}

export default BlogDetail;