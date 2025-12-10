import React, { useState, useEffect } from 'react';
import { getFoodList } from '../data/foodList';

export const Food = (props) => {
    const { food, deleteOrder } = props;


    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
        const fetchFoodList = async () => {
            const data = await getFoodList();
            setFoodList(data);
        };
        fetchFoodList();
    }, []);

    if (!food) return null;


    const isPopular = () => {
        const lastOrderDate = new Date(food.lastOrderDate);
        return lastOrderDate.getTime() > Date.now() - (2 * 86400000);
    };

    const isBigOrdersAmount = () => {
        return food.ordersAmount > 20;
    };

    const isAvailable = () => {
        return food.isAvailable;
    };

    return (
        <div className="foodList" style={isBigOrdersAmount() ? { backgroundColor: '#fff3cd' } : {}}>
            <div><h1>#{food.id}</h1></div>
            <div><h1>{food.description}</h1></div>
            <div className="foodImg" style={{ backgroundImage: food.image ? `url(${food.image})` : 'none' }} />
            <div>
                <h5>Quantity:</h5>
                <p>{food.ordersAmount}</p>
                {isPopular() && <h3>👑 Popular!</h3>}
            </div>
            <div>
                <button
                    onClick={() => deleteOrder(food.id)}
                    disabled={!isAvailable()}
                    style={{ opacity: isAvailable() ? 1 : 0.5 }}
                    className="deleteButton">Delete
                </button>
            </div>
        </div >
    );
}