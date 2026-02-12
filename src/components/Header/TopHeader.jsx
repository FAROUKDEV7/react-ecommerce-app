import logo from "../../img/logo.png"
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import "./Header.css"


const TopHeader = () => {
  return <>
    <div className="top_header">
        <div className="container">
            {/* main logo */}
            <a href="/"><img src={logo} alt="main logo" /></a>
            {/* start search */}
            <form action="" className="search">
                <input type="text" name="search" placeholder="Search For Products"/>
                <button type="submit"><IoSearchSharp /></button>
            </form>
            {/* icons favorite & cart */}
            <div className="icons">
                <div className="icon">
                    <FaRegHeart />
                    <span className="count">0</span>
                </div>
                <div className="icon">
                    <TiShoppingCart />
                    <span className="count">0</span>
                </div>
            </div>
        </div>
    </div>
  </>;
};

export default TopHeader;
