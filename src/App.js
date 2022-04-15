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
        <Route path='foods/:foodId' element={<FoodDetail></FoodDetail>}></Route>
      </Route>
    </Routes>

     <Footer></Footer>
    </div>
  );
}



/*
 https://i.ibb.co/xgQ9t8k/lunch2.png
https://i.ibb.co/GHM4c5z/lunch3.png
https://i.ibb.co/9H0nfTF/lunch4.png
https://i.ibb.co/3CR8y6K/lunch5.png
https://i.ibb.co/5KB7DWt/lunch6.png
https://i.ibb.co/BydWH42/breakfast1.png
https://i.ibb.co/V97qrjS/breakfast2.png
https://i.ibb.co/PTWy4BP/breakfast3.png
https://i.ibb.co/DRF9ybL/breakfast4.png
https://i.ibb.co/tB92q5N/breakfast5.png
https://i.ibb.co/M6Y7GD4/breakfast6.png
https://i.ibb.co/GFLq8MG/dinner1.png
https://i.ibb.co/K5b9DSf/dinner2.png
https://i.ibb.co/mqD9D2m/dinner3.png
https://i.ibb.co/yp90KN7/dinner4.png
https://i.ibb.co/DVZw6dn/dinner5.png
https://i.ibb.co/DpsPZW8/dinner6.png */
export default App;
