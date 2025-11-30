import React from 'react';

export const foodItems = [
    "Pizza",
    "Ice cream",
    "Drinks",
    "Falafel & Chips",
    "Pastas & more..."
];
export const extendedItems = [
    {
        title: "Pizzas",
        names: ["Italian Pizza", "American Pizza", "Chinese Pizza"]
    },
    {
        title: "Drinks",
        names: ["Cold Water", "Ice Coffee", "Cappuccino", "Espresso", "Coke", "Juice", "Vodka", "Whisky"]
    },
    {
        title: "Ice Cream",
        names: ["Strawberry", "Vanilla", "Chocolate"]
    }
];

export const FoodNames = () => {
    return (
        <div>
            <select name='description'>
                <option value="">Select a food</option>
               {extendedItems.map((category) =>
    category.names.map((name, nameIndex) => (
        <option key={nameIndex}>{name}</option>
    ))
)}          
            </select>
        </div>
    );
}