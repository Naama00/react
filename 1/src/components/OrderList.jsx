import React, { useState, useEffect } from 'react';
import { getFoodList, addNewOrder } from '../data/foodList';
import { Food } from './Food';
import { format } from 'date-fns';
import { FoodNames, foodImages, extendedItems } from './FoodNames';

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
        const selectedFoodName = event.target.description.value;
        const allFoodNames = extendedItems.flatMap(category => category.names);
        const foodIndex = allFoodNames.indexOf(selectedFoodName);
if(foodIndex===null)
    return;
        const newOrder = {
            id: orderId,
            description: event.target.description.value,
            image: foodImages[foodIndex],
            ordersAmount: event.target.amount.value,
            lastOrderDate: format(new Date(), 'yyyy-MM-dd'),
            isAvailable: true
        }
        event.target.reset();
        addNewOrder(newOrder).then(data => {
            setFoodList(data);
        });
        setOrderId(orderId + 1);
    }

    return (
        <div id='orderList'>
            <h2>Exist Orders</h2>
          
            <ul style={{ listStyleType: 'none' }}>
                {foodList.map(f => (
                    <Food key={f.id} food={f} />
                ))}
            </ul> 
             <form onSubmit={addOrder}>
                <FoodNames/>
                <br />
                <input type="number" name='amount' placeholder='amount' required /> <br />
                <br />
                <button type="submit" >Add New Order</button>
            </form>
        </div>
    );
}

