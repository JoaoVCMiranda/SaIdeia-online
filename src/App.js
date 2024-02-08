import logo from './ideia.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Se eu fosse fazer o site seria alguma coisa assim.
        </p>
        <a
          className="App-link"
          href="https://soaideia.online"
          target="_blank"
          rel="noopener noreferrer"
        >
         Só a ideia - Online
        </a>
      </header>
    </div>
  );
}

export default App;
