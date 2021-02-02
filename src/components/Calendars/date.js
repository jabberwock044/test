import React, { useState }  from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';



const Sample = ({ ppppp }) => {

  const [focused, setFocused] = useState(false);
  const [date, setDate] = useState(moment);
  console.log("aaaaaaaaaaaaa")
  console.log(ppppp.day)


  return (    
    <>
        <p>{ppppp.count}</p>
        <button onClick={ppppp.increase}>+</button>
        <SingleDatePicker
        date={ppppp.day}
        onDateChange={ppppp.daychange}
        focused={focused}
        onFocusChange={focused => setFocused(focused)}
        onClose={focused => setFocused(false)}
        showClearDate
        reopenPickerOnClearDate
        id="date"
        />
    </>    
  );
}

export default Sample
