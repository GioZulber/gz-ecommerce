import './scss/App.scss';
import { NavBar } from './components/NavBar/navBar';
import { ItemListContainer } from './components/ItemListContainer/itemListContainer';


function App() {
  return (
    <div>
      <header className="App-header">
          <NavBar />
      </header>
      <main>
          <ItemListContainer />
      </main>
    </div>
  );
};

export default App;
