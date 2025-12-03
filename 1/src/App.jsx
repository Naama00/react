import './App.css';
import { OrderList } from './components/OrderList';
import { useState, useEffect } from 'react';
import { getFoodList } from './data/foodList';
import { foodItems, extendedItems } from './components/FoodNames';

function App() {

  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    getFoodList().then(data => {
      setFoodList(data);
    });
  }, []);
  const [showMenu, setShowMenu] = useState(true);

  const showMenuClicked = () => {
    setShowMenu(!showMenu);
  }

  const [userDetails, setUserDetails] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [userName, setUserName] = useState('');
  const [isNameVisible, setIsNameVisible] = useState(false);

  const showInputs = () => {
    setUserDetails(!userDetails);
    setIsButtonVisible(false);
    setIsNameVisible(false);
  }

  const saveInput = (e) => {
    setUserName(e.target.value);
  }

  const removeInputs = () => {
    setUserDetails(false);
    setIsButtonVisible(true);
    setIsNameVisible(true);
  }

  const buttonName = showMenu ? 'extended menu' : 'reduced menu';

  return (
    <div className="App">
      <header className="App-header">  <Header /> { }
      </header>

      <div className="home">
        <div className='about'> <About color={{ color: '#ff4d00ff' }} />{ }</div>
        <div className="content"></div>
      </div>
      <div className='menu'>
        {<div>
          <button onClick={showMenuClicked}> {buttonName} </button>
          {showMenu ? (
            <ul>
              {foodItems.map((item, index) => (
                <li key={index}>{item}</li> // Use food names directly here
              ))}
            </ul>
          ) : (
            <>
              {extendedItems.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3>{category.title}</h3>
                  <ul>
                    {category.names.map((name, nameIndex) => (
                      <li key={nameIndex}>{name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
        </div>}
      </div>
      <div>
        {isButtonVisible && (
          <><div style={{textAlign:'center',margin:'5% 0%'}}><button onClick={showInputs}>{userDetails ? '' : 'insert your details'} </button></div></>
        )}
        {userDetails &&
          <form>
            <input type="text" onChange={saveInput} placeholder='name' />
            <br />
            <input type="text" placeholder='email' />
            <br />
            <button onClick={removeInputs}>save</button>
          </form>}
        { isNameVisible && <><div style={{textAlign:'center'}}>
       <h1>Hello, {userName}!</h1>
      </div> </> }
      </div>
      <div>
        <OrderList></OrderList>
      </div>
    </div>
  );
}

function Header() {
  return (
    <h1>pizza store</h1>
  );
}

function About(props) {
  return (
    <div className='about'>
      <h3 style={props.color}>
        over 50 years with the best service! <br></br>
        why choose us?  </h3>
      <ul>
        <li>best food</li>
        <li>freshness</li>
        <li>quick service</li>
        <li>low price</li>
        <li>central location</li>
      </ul>
    </div>
  );
}

export { Header };
export { About };
export default App;