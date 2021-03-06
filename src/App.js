import "./scss/App.scss";
import { NavBar } from "./components/NavBar/navBar";
import { ItemListContainer } from "./components/Containers/ItemListContainer/itemListContainer";
import { ItemDetailContainer } from "./components/Containers/ItemDetailContainer/itemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Footer } from "./components/Footer/footer";
import { Cart } from "./components/Cart/cart";
import { CartProvider } from "./context/cartContext";
import { FormContact } from "./components/Forms/formContact";
import { NotFound } from "./components/NotFound/notFound";
const routes = [
  { path: "/", element: <ItemListContainer /> },
  { path: "/item/:itemId", element: <ItemDetailContainer /> },
  { path: "/category", element: <ItemListContainer /> },
  { path: "/category/:categoryId", element: <ItemListContainer /> },
  { path: "/cart", element: <Cart /> },
  { path: "/contacto", element: <FormContact /> },
  { path: "*", element: <NotFound /> },
];

function App() {
  return (
    <CartProvider>
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
    </CartProvider>
  );
}

export default App;
