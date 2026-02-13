import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


const ProductsDetails = () => {
    const {id} = useParams() 
    const [products , setProducts] = useState(null)
    const [isLoading , setIsLoading] = useState(true)
    


    useEffect(()=>{
        const fetchedProduct = async ()=>{
            try{
                const res = await fetch(`https://dummyjson.com/products/${id}`)
                const data = await res.json()
                if(res.status === 200){
                    setProducts(data)
                    setIsLoading(false)
                }
            }catch(error){
                console.log(error)
            }
        }
        fetchedProduct()
    },[id])

    if(isLoading) return <p>Loading...</p>
    
  return (
    <h2>{products.title}</h2>
  )
}

export default ProductsDetails