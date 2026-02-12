import BtmHeader from "./components/Header/BtmHeader";
import TopHeader from "./components/Header/TopHeader";
import Home from "./page/home/Home";

const App = () => {
  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>
      <Home />
    </>
  );
};

export default App;
