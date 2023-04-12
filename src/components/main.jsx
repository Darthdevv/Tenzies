import React, { useState,useEffect } from 'react'
import Die from '../components/die';
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

const Main = () => {
    const [dice, setDice] = useState(allNewDice());
    const [tenzies, setTenzies] = useState(false)

    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld);
        const firstValue = dice[0].value;
        const allSameValue = dice.every((die) => die.value === firstValue);
        if (allHeld&&allSameValue) {
            setTenzies(true);
        }
    }, [dice]);

        function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid(),
        };
        }

        function allNewDice() {
            const newDice = [];
            for (let i = 0; i < 10; i++) {
                newDice.push(generateNewDie());
            }
            return newDice;
        }

            function holdDice(id) {
                setDice(prevDice => prevDice.map(die => {
                    return die.id === id ? { ...die, isHeld: !die.isHeld } : die
                }))
            }

        function rollDice() {
            if (!tenzies) {
                    setDice((prevDice) =>
                    prevDice.map((die) => {
                        return die.isHeld ? die : generateNewDie();
                    })
                    );
            } else {
                setTenzies(false);
                setDice(allNewDice());
                }
        }
        
        const diceElements = dice.map(die => <Die holdDice={()=>holdDice(die.id)} key={die.id} value={die.value} isHeld={die.isHeld} />)

    return (
        <div className="main">
            {tenzies && (
                <Confetti/>
            )}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">
                Roll until all dice are the same. Click <br /> each die to freeze it
                at its current value <br />
                between rolls.
            </p>
            <div className="container">{diceElements}</div>
                {tenzies ? (
                    <button onClick={rollDice} className="roll">
                        New Game
                    </button>
                    ) : (
                    <button onClick={rollDice} className="roll">
                        Roll
                    </button>
                )}
        </div>
    );
}

export default Main