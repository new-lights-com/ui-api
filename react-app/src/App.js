import {Route, Routes} from 'react-router-dom';
import LoginPage from "./pages/Login";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Cart from "./pages/Cart";

function App() {

  return (
    <div className="bg-black text-white App">
     <Routes>
      <Route  path='/login' element={<LoginPage/>}/>
      <Route  exact path='/' element={<Home/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
         <Route exact path='/cart' element={<Cart/>}/>
      <Route exact path='*' element={<Error/>}/>
     </Routes>
    </div>
  );
}

export default App;
