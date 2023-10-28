import React from "react";
import Card from "../UI/Card";
import classes from './ProductList.module.css'

const ProductList = (props) => {
  return (
    <Card className={classes.products}>
      <h2>Electronics</h2>
      <ul>
        {props.products.map((product) => {
          if (product.category === 'Electronics') {
            return <li key={product.id}>Product Id: {product.product_id}, Product Price: {product.price}, Product Name: {product.name}</li>;
          }
          return null;
        })}
      </ul>

      <h2>Food Items</h2>
      <ul>
        {props.products.map((product) => {
          if (product.category === 'Food Items') {
            return <li key={product.id}>Product Id: {product.product_id}, Product Price: {product.price}, Product Name: {product.name}</li>;
          }
          return null;
        })}
      </ul>

      <h2>Skin Care</h2>
      <ul>
        {props.products.map((product) => {
          if (product.category === 'Skin Care') {
            return <li key={product.id}>Product Id: {product.product_id}, Product Price: {product.price}, Product Name: {product.name}</li>;
          }
          return null;
        })}
      </ul>
    </Card>
  );
};

export default ProductList;
