// Routes.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './src/pages/Home/Home';
import DetailsProduct from './src/pages/DetailsProduct/DetailsProduct';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={DetailsProduct} />
      </Switch>
    </Router>
  );
};

export default Routes;
