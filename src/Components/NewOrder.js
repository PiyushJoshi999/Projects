import React, {useState, Fragment} from 'react';
import OrderForm from './OrderForm';
import OrderItem from './OrderItem';

const NewOrder = () => {

    const [addedOrderData, setAddedOrderData] = useState([]);

    const saveOrderDataHandler = (enteredOrderData) => {
        const newOrderData = {
            ...enteredOrderData,
            id : Math.random().toString()
        };
        setAddedOrderData((prevOrderData) => [...prevOrderData, newOrderData]);
    }

    return (
        <Fragment>
            <OrderForm onSaveOrderData = {saveOrderDataHandler} />
            <OrderItem orderData = {addedOrderData} setAddedOrderData={setAddedOrderData} />
        </Fragment>
        
    );

}

export default NewOrder;