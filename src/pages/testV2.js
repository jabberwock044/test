import React, { useState, useContext, createContext, } from 'react';
import MyContext from '../contexts/context'
import Child from '../components/test/Child'


const App = () => {   
    const [count, setCount] = useState(0);
    const value = {
        name: 'soarflat',
        handleClick: () => setCount(count =>　count + 1)
    };

    return (
        <div>
            <p>count: {count}</p>
            <MyContext.Provider value={value}>
                <Child />
            </MyContext.Provider>
        </div>
    );
}

export default App