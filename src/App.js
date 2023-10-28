import React,{useState} from 'react';
import './App.css';
import AddProduct from './Components/AddProducts/AddProduct';
import ProductList from './Components/AddProducts/ProductList';
function App() {
  const [productList,setProductList]=useState([])
  const AddProductHandler=(id,price,name,category)=>{
    setProductList((prev)=>{
      return [...prev,{product_id:id,price:price,name:name,category:category,id:Math.random().toString()}]
    })
  }
  return (
    <div>
    <AddProduct onAddProduct={AddProductHandler}/>
    <ProductList products={productList} />
    </div>
  );
}

export default App;
