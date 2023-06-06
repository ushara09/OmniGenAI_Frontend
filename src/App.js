import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerLoginPage from './pages/CustomerLoginPage/CustomerLoginPage';
import SuperAdminLogin from './pages/SuperAdminLoginPage/SuperAdminLogin';
import SuperAdminHomePage from './pages/SuperAdminHomePage/SuperAdminHomePage';
import EachClientSection from './pages/SuperAdminHomePage/EachClientSection';
import EachBotSection from './pages/SuperAdminHomePage/EachBotSection';
import AIManagementSection from './pages/SuperAdminHomePage/AIManagementSection';
import SideNavBar from './Components/SideNavBar/SideNavBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SideNavBar/>} />
        <Route path='/customer-login' element={<CustomerLoginPage/>} />
        <Route path='/admin-login' element={<SuperAdminLogin/>} />
        <Route path='/admin/home' element={<SuperAdminHomePage/>} />
        <Route path='/admin/each-client-section' element={<EachClientSection/>} />
        <Route path='/admin/each-bot-section' element={<EachBotSection/>} />
        <Route path='/admin/ai-management' element={<AIManagementSection/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
