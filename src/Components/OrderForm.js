import React, { useState } from 'react';
import './OrderForm.css';

const OrderForm = (props) => {
    const [dish, setDish] = useState('');
    const [dishPrice, setDishPrice] = useState('');
    const [table, setTable] = useState('');

    const dishNameChangeHandler = (event) => {
        setDish(event.target.value);
    }

    const dishPriceChangeHandler = (event) => {
        setDishPrice(event.target.value);
    }

    const tableChangeHandler = (event) => {
        setTable(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const orderData = {
            dish: dish,
            dishPrice: dishPrice,
            table: table,
        };

        props.onSaveOrderData(orderData);

        setDish('');
        setDishPrice('');
        setTable('');
    }


    return (
        <form onSubmit={submitHandler}>
            <div className='my-form'>
                <div className='my-form__dishname'>
                    <label>Choose a dish:</label>
                    <select id="dish" value={dish} onChange={dishNameChangeHandler}>
                        <option value="">Select</option>
                        <option value="fried-rice">Fried Rice</option>
                        <option value="biryani">Biryani</option>
                        <option value="veg-thali">Veg Thali</option>
                        <option value="non-veg-thali">Non-Veg Thali</option>
                        <option value="noodles">Noodles</option>
                    </select>
                </div>
                <div className='my-form__dishprice'>
                    <label>Dish Price:</label>
                    <input type='number'
                        value={dishPrice}
                        onChange={dishPriceChangeHandler}
                    ></input>
                </div>
                <div className='my-form__table'>
                    <label>Choose Table:</label>
                    <select id='table' value={table} onChange={tableChangeHandler}>
                        <option value="">Select</option>
                        <option value="table1">Table 1</option>
                        <option value="table2">Table 2</option>
                        <option value="table3">Table 3</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Add to Bill</button>
                </div>
            </div>
        </form>
    );
}

export default OrderForm;