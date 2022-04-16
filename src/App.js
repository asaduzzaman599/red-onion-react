import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import FoodContainer from './Pages/Home/FoodContainer/FoodContainer';
import FoodDetail from './Pages/Home/FoodDetail/FoodDetail';
import Login from './Pages/Home/Auth/Login/Login';
import Signup from './Pages/Home/Auth/SignUp/Signup';
import RequireAuth from './Pages/Home/Auth/RequireAuth/RequireAuth';
import DelivaryForm from './Pages/Home/DelivaryForm/DelivaryForm';

function App() {
  return (
    <div className="App">
     <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}>
        <Route index element={<FoodContainer></FoodContainer>}></Route>
        <Route path='foods/:category/:foodId' element={<FoodDetail></FoodDetail>}></Route>
        <Route path='/delivarydetails' element={<RequireAuth>
          <DelivaryForm></DelivaryForm>
        </RequireAuth>}></Route>
      </Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
    </Routes>

     <Footer></Footer>
    </div>
  );
}




export default App;
