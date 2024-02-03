import { AppProvider } from '../context/productsContext';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import DetailsProduct from './pages/DetailsProduct/DetailsProduct';
import './app.css';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" Component={ Home } />
        <Route path="/product/:typeProduct/:id" Component={ DetailsProduct } />
      </Routes>
    </AppProvider>
  )
}

export default App
