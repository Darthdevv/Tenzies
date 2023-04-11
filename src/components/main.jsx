import React, { useState } from 'react'
import Die from '../components/die';
import { nanoid } from "nanoid";

    const Main = () => {
        const [dice, setDice] = useState(allNewDice())

        function allNewDice() {
            const newDice = [];
            for (let i = 0; i < 10; i++) {
                newDice.push({
                    value: Math.ceil(Math.random() * 6),
                    isHeld: true,
                    id: nanoid()
                });
            }
            return newDice;
        }


        function rollDice() {
            setDice(allNewDice());
        }
        
        const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} />)

    return (
    <div className="main">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
            Roll until all dice are the same. Click <br /> each die to freeze it at
            its current value <br />
            between rolls.
        </p>
        <div className="container">
            {diceElements}
        </div>
            <button onClick={rollDice} className='roll'>
                Roll
            </button>
    </div>
    );
}

export default Main