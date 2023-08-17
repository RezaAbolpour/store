import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./pages/CartPage/CartPage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import AdminLogin from './admin/Login/Login'
import NoPage from "./pages/ErrorPage/NoPage";
import Dashboard from "./admin/Dashboard/Dashboard";
import { Navigate } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate replace to="/" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
