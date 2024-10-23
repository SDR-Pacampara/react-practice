import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Card from './Components/Card';
import CardCounter from './Components/CardCounter';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */



/* function App() {
  return (

    <div>
      <Button />
    </div>
  );
} */

/* function App() {
  const cardData = {
    card1: {
      cardName: "John Doe",
      description: "Software Engineer",
    },
    card2: {
      cardName: "Merry Cruz",
      description: "Marketing Expert",
    },
    card3: {
      cardName: "Jason Oliver",
      description: "Web Designer",
    },
  };

  //const cardDescription1 = 
  //'Lorem ipsum dolor.';

  return (
    <div className='card-container'>
      <Card {...cardData.card1} />
      <Card {...cardData.card2} />
      <Card {...cardData.card3} />
      
      //<Card cardName={"Card 1"} description={cardDescription1}/>
      //<Card cardName={"Card 2"} description={"Description2"}/>
      //<Card cardName={"Card 3"} description={"Description3"}/> 
     
    </div>
  );
} */

function App() {
  return (
    <div className="card-container">
      <CardCounter />
    </div>
  );
}

export default App;