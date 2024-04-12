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

function App() {
  return (
    <ShoppingCartProvider>
      <Routes>
        <Route path="/ecommerce" Component={Home} />
        <Route path="/ecommerce/blog" Component={BlogPage} />
        <Route path="/ecommerce/login" Component={PageLogin} />
        <Route path="/ecommerce/register" Component={PageRegister} />
        <Route path="/ecommerce/shop" Component={Shopping} />
        <Route path="/ecommerce/product/:typeProduct/:id" Component={DetailsProduct} />
        <Route path="/ecommerce/shop/product/:typeProduct/:id" Component={DetailsProduct} />

        <Route path="/ecommerce/blog/:id" Component={BlogDetail} />

      </Routes>
    </ShoppingCartProvider>
  )
}

export default App
