import { useState } from "react";

function Fruit(props) {
    const [number, setNumber] = useState(0);

    return   (
        <div><fieldset>
            {props.fruitname} <button onClick={() => setNumber(number - 1)}>-</button> {number} <button onClick={() => setNumber(number + 1)}>+</button>
    </fieldset>
            <br/>
        </div>
    );
}

export default Fruit;