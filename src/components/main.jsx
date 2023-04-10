import React, { useState } from 'react'
import Die from '../components/die';

    const Main = () => {
        const [dice, setDice] = useState(allNewDice())

        function allNewDice() {
          const array = Array(10) // array size is 10
            .fill()
            .map(() => Math.ceil(6 * Math.random())); // numbers from 1-6 (exclusive)
        return array
        }

            function refreshPage() {
            window.location.reload(false);
            }
        
        const diceElements = dice.map(die => <Die value={die} />)

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
            <button onClick={refreshPage} className='roll'>
                Roll
            </button>
    </div>
    );
}

export default Main