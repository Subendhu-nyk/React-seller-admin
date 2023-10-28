import React,{useState} from "react";
import Card from "../UI/Card";
import classes from './AddProduct.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddProduct=(props)=>{
    const [id,setId]=useState('')
    const [price,setPrice]=useState('')
    const [name,setName]=useState('')
    const[category,setCategory]=useState('')
    const[error,setError]=useState()

    const AddProductHandler=(event)=>{
        event.preventDefault()
        // console.log("details>>",id,price,name,category)
        if(id.trim().length===0||name.trim().length===0||price.trim().length===0||category.trim().length===0){
            setError({
                title:"Invalid Input",
                message:"Please enter a valid inputs (non-empty values)"
            })
            return
        }
        if(+id<1||+price<1){
           setError({
            title:"Invalid Id or Price",
                message:"Please enter a valid id or price (non-empty values)"
           
           })
            return
        }
        props.onAddProduct(id,price,name,category)
        setId("")
        setPrice('')
        setName('')
        setCategory("")
    }

    const idChangeHandler=(event)=>{
        event.preventDefault()
        console.log(event.target.value)
        setId(event.target.value)
    }
    const priceChangeHandler=(event)=>{
        event.preventDefault()
        console.log(event.target.value)
        setPrice(event.target.value)
    }

    const nameChangeHandler=(event)=>{
        event.preventDefault()
        console.log(event.target.value)
        setName(event.target.value)
    }

    const categoryChangeHandler=(event)=>{
        event.preventDefault()
        console.log(event.target.value)
        setCategory(event.target.value)
    }
     const errorHandler=()=>{
        setError(null)
     }

    return(
        <div>
          {error &&  <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={AddProductHandler}>
            <label htmlFor="id">Product Id</label>
            <input type="number" value={id} id="id" onChange={idChangeHandler}/>
            <label htmlFor="price">Selling Price</label>
            <input type="number" value={price} id="price" onChange={priceChangeHandler}/>
            <label htmlFor="name">Product Name</label>
            <input type="text" value={name} id="name" onChange={nameChangeHandler}/>
            <label htmlFor="category">Choose a Category</label>
            <select id="category" onChange={categoryChangeHandler}>
                <option value={category}>Select Category</option>
                <option value='Electronics'>Electronics</option>
                <option value='Food Items'>Food Items</option>
                <option value='Skin Care'>Skin Care</option>
            </select><br/>
            <Button type='submit'>Add product</Button>
        </form>
        </Card>
        </div>
    )
}

export default AddProduct;