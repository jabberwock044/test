import React, { useContext, useState }  from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import DateContext from '../../contexts/DateContext';



const Sample = () => {

  const [focused, setFocused] = useState(false);
  const { day, change } = useContext(DateContext);

  return (    
    <>
        <SingleDatePicker
        date={day}
        onDateChange={change}
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
