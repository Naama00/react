import React, { useState, useEffect } from 'react';
import { getFoodList, addNewOrder } from '../data/foodList';
import { Food } from './Food';
import { format } from 'date-fns';
import { FoodNames } from './FoodNames';

export const OrderList = () => {
       const [orderId, setOrderId] = useState(4);
    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
        getFoodList().then(data => {
            setFoodList(data);
        });
    }, []);

    const addOrder = (event) => {
        event.preventDefault();
        const newOrder = {
            id:orderId,
            description: event.target.description.value,
            ordersAmount: event.target.quantity.value,
            lastOrderDate: format(new Date(), 'yyyy-MM-dd'),
            isAvailable: true
        }
        event.target.reset(); // Reset the form
        addNewOrder(newOrder).then(data => {
            setFoodList(data); // Update food list
        });
        setOrderId(orderId+1);
    }

    return (
        <>
            <h2>Orders List</h2>
            <form onSubmit={addOrder}>
                <FoodNames />
                <br />
                <input type="number" name='quantity' placeholder='Quantity' required /> <br />
                <br />
                <button type="submit">Add New Order</button>
            </form>
            <ul style={{ listStyleType: 'none' }}>
                {foodList.map(f => (
                    <Food key={f.id} food={f} />
                ))}
            </ul>
        </>
    );
}

