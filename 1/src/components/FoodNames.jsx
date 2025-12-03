import image1 from '../data/images/top-view-whole-pepperoni-pizza-with-sesame-sprinkles-top.jpg';
import image2 from '../data/images/pexels-sydney-troxell-223521-708587.jpg';
import image3 from '../data/images/pexels-narda-yescas-724842-1566837.jpg';
import image4 from '../data/images/pexels-pixabay-416528.jpg'
import image5 from '../data/images/pexels-chiecharon-1193335.jpg'
import image6 from '../data/images/pexels-pixabay-414555.jpg'
import image7 from '../data/images/pexels-enginakyurt-2288840.jpg'
import image8 from '../data/images/pexels-karola-g-4389675.jpg'
import image9 from '../data/images/pexels-suju-1233319.jpg'
import image10 from '../data/images/pexels-ywanphoto-3089663.jpg'
import image11 from '../data/images/pexels-alem-sanchez-182647-613182.jpg'
import image12 from '../data/images/pexels-david-disponett-1118410-2161649.jpg'
import image13 from '../data/images/pexels-almapapi-2586924.jpg'
import image14 from '../data/images/pexels-markusspiske-126790.jpg'
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
        names: ["American Pizza", "Italian Pizza", "Chinese Pizza"]
    },
    {
        title: "Drinks",
        names: ["Cold Water", "Ice Coffee", "Cappuccino", "Espresso", "Coke", "Juice", "Vodka", "Whiskey"]
    },
    {
        title: "Ice Cream",
        names: ["Strawberry", "Vanilla", "Chocolata"]
    }
];
export const foodImages = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14
]
export const FoodNames = () => {
    return (
        <div>
            <select name='description'>
                {extendedItems.map((category) =>
                    category.names.map((name, nameIndex) => (
                        <option key={nameIndex}>{name}</option>
                    ))
                )}
            </select>
        </div>
    );
}