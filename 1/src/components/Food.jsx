
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

 const deleteOrder=()=>{

 }

    return (
        <div className="foodList" style={isBigOrdersAmount() ? { backgroundColor: '#b69c95ff' } : {}}>
            <div><h1>{food.id}</h1></div>
            <div><h1>{food.description}</h1></div>
            <div className="foodImg" style={{ backgroundImage: food.image ? `url(${food.image})` : 'none' }} />
            <div><h5>amount: </h5>{food.ordersAmount}</div>
            <div style={{ width: '50px' }}>{isPopular() && <h2>👑 popular food 👑</h2>}</div>
            <div>
                <button
                onClick={deleteOrder}
                    disabled={!isAvailable()}
                    style={{ opacity: isAvailable() ? 1 : 0.5 }}
                    className="deleteButton">To Delete
                </button>
            </div>
        </div>
    );
}

