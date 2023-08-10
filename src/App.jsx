import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import ProductPage from './pages/ProductPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';
import AdminLogin from './admin/Login/Login';
import AdminDashboard from './admin/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        {/* User Routes */}
        <Route exact path="/" component={Home} />
        <Route path="/product/:productId" component={ProductPage} />
        <Route path="/cart" component={CartPage} />

        {/* Admin Routes */}
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/admin/dashboard" component={AdminDashboard} />

        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;