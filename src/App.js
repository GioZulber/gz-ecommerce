import "./scss/App.scss";
import { NavBar } from "./components/NavBar/navBar";
import { ItemListContainer } from "./components/Containers/ItemListContainer/itemListContainer";
import { ItemDetailContainer } from "./components/Containers/ItemDetailContainer/itemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Footer } from "./components/Footer/footer";
import { ItemCategoryContainer } from "./components/Containers/ItemCategoryContainer/itemCategoryContainer";
import { Cart } from "./components/Cart/cart";
// import { CartContext } from "./context/cartContext";
const routes = [
  { path: "/", element: <ItemListContainer /> },
  { path: "/details/:itemId", element: <ItemDetailContainer /> },
  { path: "/category", element: <ItemListContainer /> },
  { path: "/category/:categoryBrand", element: <ItemCategoryContainer /> },
  { path: "/cart", element: <Cart /> },
];
// const [cartContextDou, setContextDou] = useState(false);

// const switchCartContext = () => {
//   setContextDou(!cartContextDou);
// };

function App() {
  return (
    <BrowserRouter>
      {/* <CartContext.Provider
        value={{ cartContextDou, switchCartContext }}
      ></CartContext.Provider>; */}
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
