import React from "react";
import Card from "../UI/Card";
import classes from './ProductList.module.css'

const ProductList=(props)=>{
return(
    <Card className={classes.products}>
        <ul>
            {
                props.products.map((product)=>(
                    <li key={product.id}>Product Id -- {product.product_id} || Product Price-- {product.price} || Product Name -- {product.name} || Product Category -- {product.category}</li>
                ))
            }
        </ul>
    </Card>
)
}

export default ProductList