import React from 'react';

const OrderItem = (props) => {
    const { orderData, setAddedOrderData } = props;

    const renderIndividualOrderItems = (table) => {
        const filteredOrders = orderData.filter((order) => order.table === table);
      
        const deleteOrderHandler = (orderId) => {
          const updatedOrders = orderData.filter((order) => order.id !== orderId);
          setAddedOrderData(updatedOrders);
        };
      
        return (
          <div>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <div key={order.id}>
                  <p>Dish: {order.dish}</p>
                  <p>Price: {order.dishPrice}</p>
                  <button onClick={() => deleteOrderHandler(order.id)}>Delete</button>
                </div>
              ))
            ) : (
              <p>No orders for {table}</p>
            )}
          </div>
        );
      };
      


    return (
        <div>
            <h2>Order List</h2>
            <div>
                <h3>Table 1</h3>
                {renderIndividualOrderItems('table1')}
            </div>
            <div>
                <h3>Table 2</h3>
                {renderIndividualOrderItems('table2')}
            </div>
            <div>
                <h3>Table 3</h3>
                {renderIndividualOrderItems('table3')}
            </div>
        </div>
    );
};

export default OrderItem;
