import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerLoginPage from './pages/CustomerLoginPage/CustomerLoginPage';
import SuperAdminLogin from './pages/SuperAdminLoginPage/SuperAdminLogin';
import SuperAdminHomePage from './pages/SuperAdminHomePage/SuperAdminHomePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/customer-login' element={<CustomerLoginPage/>} />
        <Route path='/admin-login' element={<SuperAdminLogin/>} />
        <Route path='/super-admin-home' element={<SuperAdminHomePage/>} />
        <Route path='/super-admin-home' element={<SuperAdminHomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
