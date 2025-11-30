import './App.css';
import { ExtendedMenu } from './components/ExtendedMenu';
import { useState } from 'react';
import { getFoodList } from './data/foodList';

function App() {

  const foodList = getFoodList();
  const [showMenu, setShowMenu] = useState(false);

  const showMenuClicked = () => {
    setShowMenu(!showMenu);
  }

  const [userDetails, setUserDetails] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
const [userName,setUserName]=useState('');
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

  const buttonName = showMenu ? 'extended menu' : 'menu';

  return (
    <div className="App">
      <header className="App-header">  <Header /> { }
      </header>
      <div className="body">
        <div className='menu'><Menu color={{ color: '#ffe100ff' }} />{ }</div>
        <div className="content"></div>
        <div className='about'> <About color={{ color: '#ff4d00ff' }} />{ }</div>
      </div>
      <div>
        {isButtonVisible && (
          <button onClick={showInputs}>{userDetails ? '' : 'fill your details'} </button>
        )}
        {userDetails &&
          <>
            <input type="text" onChange={saveInput} />name:
            <input type="text" />mail:
            <button onClick={removeInputs}>save</button>
          </>}
            {isNameVisible && <h1>Hello, {userName}!</h1>} 
      </div>

      <div>
        <button onClick={showMenuClicked}> {buttonName} </button>
        {showMenu ? (
          <ul>
            {foodList.map((f, index) => (
              <li key={index}>{f.description}</li> // Render each food item's description
            ))}
          </ul>
        ) : <ExtendedMenu />}
      </div>
    </div>
  );
}

function Header() {
  return (
    <h1>pizza store</h1>
  );
}
function Menu(props) {
  return (
    <div className="menu">
      <h2 style={props.color}>our delicious menu:</h2>
      <ul>
        <li>pizza</li>
        <li>falafel</li>
        <li>chips</li>
        <li>tost</li>
        <li>baget</li>
      </ul>
    </div>)
}
function About(props) {
  return (
    <div>
      <h3 style={props.color}>
        over 50 years with the best service! <br></br>
        why to choose us?  </h3>
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
export { Menu };
export { About };
export default App;