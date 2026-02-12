import { FaStar , FaStarHalfAlt , FaRegHeart , FaShare} from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";



const Product = () => {
  return <>
    <div className="product">
        <a href="/">
          <div className="img_product">
          <img src="https://m.media-amazon.com/images/I/5184xnSu1fL._AC_SX342_.jpg" alt="" />
          </div>

          <p className="name_product">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fuga, consequatur placeat praesentium dignissimos molestiae dolore magnam cum quis suscipit!</p>

          <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
          </div>

          <p className="price">$299.99</p>
        </a>

        <div className="icons">
          <span><TiShoppingCart /></span>
          <span><FaRegHeart /></span>
          <span><FaShare /></span>
        </div>
    </div>
    
  </>
    
  
}

export default Product