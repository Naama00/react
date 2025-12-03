import image1 from '../data/images/top-view-whole-pepperoni-pizza-with-sesame-sprinkles-top.jpg';
import image2 from '../data/images/pexels-sydney-troxell-223521-708587.jpg';
import image3 from '../data/images/pexels-suzyhazelwood-2966196.jpg';
export const foodList = [
    {
        id: 1,
        description: "classic Pizza",
        image: image1,
        ordersAmount: 14,
        lastOrderDate: '2025-11-11',
        isAvailable: false
    }, {
        id: 2,
        description: "Italian Pizza",
        image: image2,
        ordersAmount: 8,
        lastOrderDate: '2025-11-10',
        isAvailable: false
    },
    {
        id: 3,
        description: "Chips",
        image: image3,
        ordersAmount: 22,
        lastOrderDate: '2025-11-08',
        isAvailable: true
    }
]


export const getFoodList = () => {
    return new Promise(res => {
        res([...foodList]); // Use the spread operator to return a new array reference
    });
}

export const addNewOrder = (newFood) => {
    foodList.push(newFood);
    return new Promise(res => {
        res([...foodList]); // Use spread to return a new reference
    });
}


