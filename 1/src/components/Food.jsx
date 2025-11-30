
export const Food = (props) => {

    const { food } = props;
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

    const alertIfOrdered = () => {
        alert(`The order was completed successfully. id: ${food.id} type: ${food.description}`);
    };

    
 
    return (
        <div className="foodList" style={isBigOrdersAmount() ? { backgroundColor: '#b69c95ff' } : {}}>
            <div><h1>{food.id}</h1></div>
            <div><h1>{food.description}</h1></div>
            <div className="foodImg" style={{ backgroundImage: `url(${food.image})` }} />
            <div style={{ width: '50px' }}>{isPopular() && <h2>👑 popular food 👑</h2>}</div>
            <div>
                <button
                    disabled={!isAvailable()}
                    style={!isAvailable() ? { opacity: '50%', hover: 'none' } : {}}
                    onClick={alertIfOrdered}
                    className="orderButton"
                >To Order </button>
            </div>


        </div>



    );
};
