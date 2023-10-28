import React from "react";
import Card from "../UI/Card";
import classes from './ProductList.module.css'

const CategoryComponent = ({ title, products }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>Product Id: {product.product_id}, Product Price: {product.price}, Product Name: {product.name}</li>
        ))}
      </ul>
    </div>
  );
};

const ProductList = (props) => {
  const categorizedProducts = {
    'Electronics': [],
    'Food Items': [],
    'Skin Care': []
  };

  props.products.forEach(product => {
    if (categorizedProducts[product.category]) {
      categorizedProducts[product.category].push(product);
    }
  });

  return (
    <Card className={classes.products}>
      <CategoryComponent title="Electronics" products={categorizedProducts['Electronics']} />
      <CategoryComponent title="Food Items" products={categorizedProducts['Food Items']} />
      <CategoryComponent title="Skin Care" products={categorizedProducts['Skin Care']} />
    </Card>
  );
};

export default ProductList;
