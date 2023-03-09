import Navbar from './components/Navbar/Navbar';
import BorrowandReturn from './components/Content/BorrowandReturn';
import { Route, Routes } from "react-router-dom"
import Home from './components/Home/Home';
import Device from './components/Device/Device';
import Employee from './components/Employee/Employee';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/BorrowandReturn' element={<BorrowandReturn />} />
        <Route path='/Device' element={<Device />} />
        <Route path='/Employee' element={<Employee />} />
        
      </Routes>

      <Footer />
    </div>
  );

}

export default App;
