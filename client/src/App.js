import Navbar from './components/Navbar/Navbar';
import BorrowandReturn from './components/Content/BorrowandReturn';
import { Route, Routes } from "react-router-dom"
import Home from './components/Home/Home';
import Device from './components/Device/Device';
import Employee from './components/Employee/Employee';
import Setting from './components/Setting/Setting';
import Footer from './components/Footer/Footer';
import Branch from './components/Setting/Branch';
import Brand from './components/Setting/Brand';
import Category from './components/Setting/Category';
import Department from './components/Setting/Department';
import DeviceStatus from './components/Setting/DeviceStatus';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/BorrowandReturn' element={<BorrowandReturn />} />
        <Route path='/Device' element={<Device />} />
        <Route path='/Employee' element={<Employee />} />
        <Route path='/Setting' element={<Setting />} />
        <Route path='/Branch' element={<Branch />} />
        <Route path='/Brand' element={<Brand />} />
        <Route path='/Category' element={<Category />} />
        <Route path='/Department' element={<Department />} />
        <Route path='/DeviceStatus' element={<DeviceStatus />} />
        
      </Routes>

      <Footer />
    </div>
  );

}

export default App;
