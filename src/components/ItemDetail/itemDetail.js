import { ItemCount } from "../ItemCount/itemCount";
import { Card } from "react-bootstrap";

export const ItemDetail = ({ item }) => {
  return (
    <div className="containerItem container">
      <div>
        <Card.Img
          className="imgDetail"
          variant="top"
          src={item.media.smallImageUrl}
        />
        {/* <img className="cardImg" src="http://mistillas.cl/wp-content/uploads/2018/04/Nike-Epic-React-Flyknit-%E2%80%9CPearl-Pink%E2%80%9D-01.jpg"/> */}
      </div>
      <div className="product">
        <p>{item.brand}</p>
        <h1 className="h1CardDetail">{item.title}</h1>
        <h2>${item.retailPrice}</h2>
        <p className="desc">
          Description: {item.releaseDate} {item.colorway}
        </p>
        <div className="divButtonCardDetail">
          <button className="buttonCardDetail add">Add to Cart</button>
        </div>
        <ItemCount initial={1} stock={5} />
      </div>
      <div className="slideshow-buttons">
        <div className="oneD"></div>
        <div className="twoD"></div>
        <div className="threeD"></div>
        <div className="fourD"></div>
      </div>
      <p className="pick">Choose size</p>
      <div className="sizes">
        <div className="size">5</div>
        <div className="size">6</div>
        <div className="size">7</div>
        <div className="size">8</div>
        <div className="size">9</div>
        <div className="size">10</div>
        <div className="size">11</div>
        <div className="size">12</div>
      </div>
    </div>
  );
};
