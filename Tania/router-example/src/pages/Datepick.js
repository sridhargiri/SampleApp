import React, { useState } from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
const DateExample = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker name='expiryDate'
    selected={startDate} onChange={date => setStartDate(date)} onSelect={date => setStartDate(date)} />
  );
};
export default DateExample