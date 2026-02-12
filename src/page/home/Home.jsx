import { useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider";
import SliderProduct from "../../components/SliderProducts/SliderProduct";

const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
  "sports-accessories",
];

const Home = () => {
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // fetch data from api
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`,
            );
            const data = await res.json();
            return { [category]: data.products };
          }),
        );
        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (erorr) {
        console.log(erorr);
      }finally{
        setIsLoading(false)
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <HeroSlider />

      {isLoading ? (
        <p style={{textAlign:"center"}}>Loading....</p>
      ) : (
        categories.map((category) => {
          return (
            <SliderProduct
              data={products[category]}
              key={category}
              title={category.replace("-", " ")}
            />
          );
        })
      )}
    </>
  );
};

export default Home;
