import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerLoginPage from './pages/CustomerLoginPage/CustomerLoginPage';
//import SuperAdminLogin from './pages/SuperAdminLoginPage/SuperAdminLogin';
import GenerateEmail from "./Components/GenerateEmail/GenerateEmail"
//import SuperAdminHomePage from './pages/SuperAdminHomePage/SuperAdminHomePage';
import CreateUserRole from './pages/CustomerAdmin/CreateUserRole';
import CreateAiBot from './pages/CustomerAdmin/CreateAiBot'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CustomerLoginPage />} />
        <Route path='/customer-login' element={<CustomerLoginPage/>} />
        <Route path='/customer-Admin' element={<CreateAiBot/>} />
        <Route path='/generate-email' element={<GenerateEmail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
