import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <p>
          Dima Shevchuk - React app
        </p>
      </header>
      <main>
        <aside>
          <ul>
            <li><a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">React Documentation</a></li>
            <li><a href="https://reactjs.org/community/examples.html" target="_blank" rel="noopener noreferrer">React Examples</a></li>
          </ul>
        </aside>
        <atricle>
          <img src={logo} className="react-logo" alt="logo" />
        </atricle>
      </main>
    </div>
  );
}

export default App;
