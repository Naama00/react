
export const foodList = [
    {
        id: 1,
        description: "classic Pizza",
        image: "src/images/pexels-pablo-macedo-287472-845798.jpg",
        ordersAmount: 14,
        lastOrderDate: '2025-11-11',
        isAvailable: false
    }, {
        id: 2,
        description: "Italic Pizza",
        image: "images/pexels-sydney-troxell-223521-708587.jpg",
        ordersAmount: 8,
        lastOrderDate: '2025-11-10',
        isAvailable: false
    },
    {
        id: 3,
        description: "Baggettost",
        image: "images/pexels-pablo-macedo-287472-845798.jpg",
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


