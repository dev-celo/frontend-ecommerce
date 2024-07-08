import { ShoppingCartProvider } from './components/context/shoppingCartContext';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import DetailsProduct from './pages/DetailsProduct/DetailsProduct';
import './app.css';
import PageLogin from './pages/Login/PageLogin';
import PageRegister from './pages/PageRegister/PageRegister';
import BlogPage from './pages/Blog/Blog';
import BlogDetail from './pages/BlogDetails/BlogDetails';
import Shopping from './pages/Shop/Shop';
import AboutPage from './pages/About/About';

function App() {
  return (
    <ShoppingCartProvider>
      <Routes>
        <Route path="/frontend-ecommerce" Component={Home} />
        <Route path="/frontend-ecommerce/blog" Component={BlogPage} />
        <Route path="/frontend-ecommerce/login" Component={PageLogin} />
        <Route path="/frontend-ecommerce/register" Component={PageRegister} />
        <Route path="/frontend-ecommerce/shop" Component={Shopping} />
        <Route path="/frontend-ecommerce/about" Component={AboutPage} />
        <Route path="/frontend-ecommerce/product/:typeProduct/:id" Component={DetailsProduct} />
        <Route path="/frontend-ecommerce/shop/product/:typeProduct/:id" Component={DetailsProduct} />
        <Route path="/frontend-ecommerce/blog/:id" Component={BlogDetail} />

      </Routes>
    </ShoppingCartProvider>
  )
}

export default App
