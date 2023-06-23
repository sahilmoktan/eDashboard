import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element ={<PrivateComponent/>}>
        <Route path="/" element={<h1>Product Listining component</h1>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/update" element={<h1>Update Product component</h1>}/>
        <Route path="/logout" element={<h1>Logout component</h1>}/>
        <Route path="/profile" element={<h1>Profile component</h1>}/>
        </Route>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        
      </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
 