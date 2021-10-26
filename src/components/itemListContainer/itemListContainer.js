import { ItemList } from "../ItemList/itemList";

export const ItemListContainer = () => {
  return (
    <div className="itemListContainer container">
      <ItemList />
    </div>
  );

  // <ItemCount initial={1} stock={5} />;
};
