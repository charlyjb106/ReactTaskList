import logo from './logo.svg';
import './App.css';
import Greating from './components/pure/greeting';
import GreetingF from './components/pure/GreetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/*Greating component*/ }
          {/*<Greating name= "carlos"></Greating>*/}
          <GreetingF name="carlos"></GreetingF>
        
        
      </header>
    </div>
  );
}

export default App;
