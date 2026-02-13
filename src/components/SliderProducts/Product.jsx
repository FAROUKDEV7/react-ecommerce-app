import { FaStar , FaStarHalfAlt , FaRegHeart , FaShare} from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";



const Product = ({item}) => {
  return <>
    <div className="product">
        <a href={`/products/${item.id}`}>
          <div className="img_product">
          <img src={item.images[0]} alt="" />
          </div>

          <p className="name_product">{item.title}</p>

          <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
          </div>

          <p className="price">{item.price}</p>
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