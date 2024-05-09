import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
    {/* Use the DatePicker component */}
    <DatePicker
      selected={selectedDate}
      onChange={date => setSelectedDate(date)}
      dateFormat="dd/MM/yyyy"
      calendarClassName="custom-calendar" // Apply custom class name
      // Other props for customization
       
    />
  </div>
  );    
}

export default MyDatePicker;
