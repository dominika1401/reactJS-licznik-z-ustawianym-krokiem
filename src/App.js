import './App.css';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>Aplikacja Licznika w ReactJs</h1>
      </header>
      <Counter initValue={15} />
    </div>
  );
}

export default App;
