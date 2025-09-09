
import Sidebar from './component/Sidebar'
import { Route, Routes } from 'react-router-dom'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'  
import Navbar1 from './component/Navbar1';
import Profile from './pages/Profile';
import Billing from './pages/Billing';
import Dashboard from './dashboard/Dashboard';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Tables from './pages/Tables';

const Pages = ({ children }) => (
  <>
    <Sidebar />
      <Navbar/>
    {children}
    {/* <Footer/> */}
  </>
);

const Pages1 = ({ children }) => (
  <>
     <Navbar1/> 
    {children}
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pages><Dashboard/></Pages>} />
      <Route path="/profile" element={<Pages><Profile/></Pages>} />
      <Route path="/billing" element={<Pages><Billing/></Pages>} />
      <Route path="/table" element={<Pages><Tables/></Pages>} />
 
      <Route path="/signin" element={<Pages1><SignIn /></Pages1>} />
      <Route path="/signup" element={<Pages1><SignUp /></Pages1>} />
    </Routes>
  )
}

export default App
