import React, { useState, useContext, createContext } from 'react';
import MyContext from '../../contexts/context';


const GrandChild = () => {
    const context = useContext(MyContext);

    return (
        <>
            <p>{context.name}</p>
            <button onClick={context.handleClick}>increment</button>
        </>
    );
}

export default GrandChild