import React, { useEffect, useState } from 'react'
import Banner from '../../components/banner/Banner'
import Product from '../../components/product/Product'
import { useLoaderData } from 'react-router-dom'
const Home = () => {
  const [products,setProducts] = useState([]);
  const data = useLoaderData()
  useEffect(()=>{
    setProducts(data.data);
  },[data])
  return (
    <div>
      <Banner/>
      <Product products={products}/>
    </div>
  )
}

export default Home