import React from 'react';
import './App.css';
import Fruit from "./Fruit";

function reset(number) {

    return (number = 0);

    document.getElementById("resetButton").innerHTML = number;
}

function App() {

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div>
                <Fruit fruitname="🍓 Aardbeien"/>
                <Fruit fruitname="🍌 Bananen"/>
                <Fruit fruitname="🍏 Appels"/>
                <Fruit fruitname="🥝 Kiwi's"/>
            </div>
            <button id="resetButton" onClick={reset}>Reset</button>
        </>

    );
}



export default App;
