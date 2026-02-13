import { Route, Routes } from "react-router-dom";
import BtmHeader from "./components/Header/BtmHeader";
import TopHeader from "./components/Header/TopHeader";
import Home from "./page/home/Home";
import ProductsDetails from "./page/ProductsDetails";

const App = () => {
  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>


      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/products/:id" element = {<ProductsDetails />}/>
      </Routes>
      
    </>
  );
};

export default App;
