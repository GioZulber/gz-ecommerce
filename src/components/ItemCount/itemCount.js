import React, {useState} from "react";
import { Card, Button } from "react-bootstrap";
export const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(initial);

    const onAddClick = () => {
        if(count >= 1 && count < 5 ){
            setCount(count + 1);
        }else{
            alert("Alcanzaste el stock limite");
        };
    };

    const onDecreace = () => {
        if(count > 1){ 
            setCount(count - 1);
        }else{
            alert("No puede agregar 0 productos.");
         };
    };
    return(
        <Card className="cardCounter" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>Producto</Card.Title>
                <Card.Text>
                    Agregue la cantidad que quiera
                </Card.Text>
                <div className="divCardCounter">                   
                    <Button onClick={onDecreace}variant="dark">-</Button>
                    <p> {count} </p>
                    <Button onClick={onAddClick}variant="dark">+</Button>
                </div>
            </Card.Body>
        </Card>  
    )
};