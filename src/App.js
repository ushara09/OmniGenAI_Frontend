import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerLoginPage from './pages/CustomerLoginPage/CustomerLoginPage';
import SuperAdminLogin from './pages/SuperAdminLoginPage/SuperAdminLogin';
import GenerateEmail from './pages/GenerateEmail/GenerateEmail'
import SuperAdminHomePage from './pages/SuperAdminHomePage/SuperAdminHomePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CustomerLoginPage />} />
        <Route path='/customer-login' element={<CustomerLoginPage/>} />
        <Route path='/admin-login' element={<SuperAdminLogin/>} />
        <Route path='/super-admin-home' element={<SuperAdminHomePage/>} />
        <Route path='/generate-email' element={<GenerateEmail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
