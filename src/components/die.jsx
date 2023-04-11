import React from 'react'

const Die = ({ value, isHeld }) => {
    const styles = {
        backgroundColor: isHeld ? "#59E391" : "white",
    };
    return (
        <div>
            <h1 className="box" style={styles}>
            {value}
            </h1>
        </div>
    );
}

export default Die