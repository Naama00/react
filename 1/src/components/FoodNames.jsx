import React from 'react';

export const FoodNames = () => {
    const foodItems = [
        "Italian Pizza",
        "American Pizza",
        "Chinese Pizza",
        "Israeli Falafel",
        "Italian Ravioli"
    ];

    return (
        <div>
            <select name='description'>
                <option value="">Select a food</option>
                {foodItems.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}