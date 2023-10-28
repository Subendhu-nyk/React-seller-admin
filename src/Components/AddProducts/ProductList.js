import React from "react";
import Card from "../UI/Card";
import classes from './ProductList.module.css'

const ProductList=(props)=>{
return(
    <Card className={classes.products}>
        <ul>
            
            {
                props.products.map((product)=>( 
                    <div>
                    <h3>{product.category}</h3>                  
                    <li key={product.id}>Product Id -- {product.product_id} || Product Price-- {product.price} || Product Name -- {product.name} || Product Category -- {product.category}</li>
                    </div> 
                ))
            }
        </ul>
    </Card>
)
}

export default ProductList