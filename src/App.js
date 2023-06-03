import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerLoginPage from './Components/CustomerLoginPage/CustomerLoginPage';
import SuperAdminLogin from './Components/SuperAdminLogin/SuperAdminLogin';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/customer-login' element={<CustomerLoginPage/>} />
        <Route path='/admin-login' element={<SuperAdminLogin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
