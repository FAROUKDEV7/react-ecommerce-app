import { BsList } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiSignInBold } from "react-icons/pi";
import { MdPersonAddAlt1 } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import "./Header.css"
import { useLocation } from "react-router-dom";

const links = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Accessories", url: "/accessories" },
  { title: "Blog", url: "/blog" },
  { title: "Contact", url: "/contact" },
];

const BtmHeader = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [isCategoryOpen , setIsCategoryOpen] = useState(false)
  const notReapetCaData = useRef(true);
  const location = useLocation()

  // fetch data for category
  useEffect(() => {
    const getGategoryData = async () => {
      if (notReapetCaData.current) {
        notReapetCaData.current = false;
        try {
          const res = await fetch("https://dummyjson.com/products/categories");
          const data = await res.json();
          if (res.status === 200) {
            setCategoryData(data);
          } else {
            console.log("msg error");
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    getGategoryData();
  }, []);

  return (
    <>
      <div className="btm_header">
        <div className="container">
          {/* start nav */}
          <nav className="nav">
              {/* start category */}
              <div className="category">
                {/* category shape */}
                <div className="category_btn" onClick={()=> setIsCategoryOpen(!isCategoryOpen)}>
                  <BsList />
                  <p>Browse Category</p>
                  <IoMdArrowDropdown />
                </div>
                {/* categoery data from api */}
                <div className={`category_data ${isCategoryOpen ? "active" : ""}`}>
                  <ul>
                    {categoryData.map((data) => {
                      return (
                        <li key={data.slug}>
                          <a href={data.url}>{data.name}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              {/* start links */}
              <div className="links">
                <ul>
                  {links.map((link) => {
                    return (
                      <li key={link.url} className={location.pathname === link.url ? "active" : ""}>
                        <a href={link.url}>{link.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
          </nav>
          {/* start reges icon */}
          <div className="reges_icon">
            <PiSignInBold />
            <MdPersonAddAlt1 />
          </div>
        </div>
      </div>
    </>
  );
};

export default BtmHeader;
