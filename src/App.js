import React from 'react';
import './App.css';
import Fruit from "./Fruit";
import Form from "./Form";

function reset(number) {

    return (number = 0);
// ik krijg de resetbutton functie niet aan de praat
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
            <div>
                <br/>
            <Form/>
            </div>
        </>

    );
}

export default App;
