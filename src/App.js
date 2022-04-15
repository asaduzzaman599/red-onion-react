import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import FoodContainer from './Pages/Home/FoodContainer/FoodContainer';
import FoodDetail from './Pages/Home/FoodDetail/FoodDetail';

function App() {
  return (
    <div className="App">
     <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}>
        <Route index element={<FoodContainer></FoodContainer>}></Route>
        <Route path='foods/:category/:foodId' element={<FoodDetail></FoodDetail>}></Route>
      </Route>
    </Routes>

     <Footer></Footer>
    </div>
  );
}




export default App;
