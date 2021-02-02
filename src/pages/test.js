import React, { useState, useContext, createContext } from 'react';
import Child from '../components/test/Child';
import MyContext from '../contexts/context';


const App = () => {
    

    const [count, setCount] = useState(0);
    const value = {
        name: 'soarflat',
        handleclick: () => setCount(count =>　count + 1)
    };

    return (
        <div>
            <p>count: {count}</p>
            <MyContext.Providr Value={value}>
                <Child />
            </MyContext.Providr>
        </div>
    );
}

export default App