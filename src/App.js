import "./scss/App.scss";
import { NavBar } from "./components/NavBar/navBar";
import { ItemListContainer } from "./components/Containers/ItemListContainer/itemListContainer";
import { ItemDetailContainer } from "./components/Containers/ItemDetailContainer/itemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Footer } from "./components/Footer/footer";

const routes = [
  { path: "/", element: <ItemListContainer /> },
  { path: "/details/:itemId", element: <ItemDetailContainer /> },
  { path: "/brands/:brandId" },
];

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {routes.map(({ path, element }, index) => (
          <Route key={index} exact path={path}>
            {element}
          </Route>
        ))}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
