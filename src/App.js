import './scss/App.scss';
import { NavBar } from './components/navBar/navBar' 
import { ItemListContainer } from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <div>
      <header className="App-header">
          <NavBar />
      </header>
      <main>
          <ItemListContainer text='Aca irán los productos del catalogo'/>
      </main>
    </div>
  );
}

export default App;
