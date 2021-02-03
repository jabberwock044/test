import React, { useState } from 'react'
import moment from 'moment'
import DateContext from '../contexts/DateContext';


const DateContextProvider = ({ children }) => {
    const [day, setDay] = useState(moment);
    const dayChange = (day) => setDay(day);

    return (
        <DateContext.Provider value={{ day: day, change: dayChange }}>
            {children}
        </DateContext.Provider>
    );
}

export default DateContextProvider