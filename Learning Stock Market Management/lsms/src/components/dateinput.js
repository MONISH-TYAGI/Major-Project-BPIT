import React,{useState} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import  './custom-datepicker.css';
const getAgoDate = (years) => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - years);
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const   StartDate = ({ value, onChange }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
      <div className="w-full ">
            <span>
                                       Start Date
                                        </span>
                                        <div className="flex ">
        <input
          // className="mt-1 p-2 rounded-lg border-2 border-blue-500 focus:outline-none focus:border-blue-700"
          className="form-control  border-0"
          type="date"
          id="startDate"
          value={value}
          min={getAgoDate(10)}
          max={getAgoDate(0)}
          onChange={onChange}
        />
         <i class="fa-solid fa-calendar-days relative right-[7%] top-[0.6rem]"></i>
         </div>
        <div>
          {/* <DatePicker
      selected={selectedDate}
      onChange={date => setSelectedDate(date)}
      dateFormat="dd/MM/yyyy"
      calendarClassName="custom-calendar bg-red-100" // Apply custom class name
      value={value}
      min={getAgoDate(10)}
      max={getAgoDate(0)}
      className="form-control  border-0 w-full bg-red-100"
      // Other props for customization
    /> */}
    </div>
      </div>
    );
};
  
const EndDate = ({ value, onChange }) => {
    return (
      <div className="w-full ">
      <span>
                                End Date
                                  </span>
                                  <div className="flex ">
  <input
    // className="mt-1 p-2 rounded-lg border-2 border-blue-500 focus:outline-none focus:border-blue-700"
    className="form-control  border-0"
    type="date"
    id="startDate"
    value={value}
    min={getAgoDate(10)}
    max={getAgoDate(0)}
    onChange={onChange}
  />
   <i class="fa-solid fa-calendar-days relative right-[7%] top-[0.6rem]"></i>
   </div>
  <div>
    {/* <DatePicker
selected={selectedDate}
onChange={date => setSelectedDate(date)}
dateFormat="dd/MM/yyyy"
calendarClassName="custom-calendar bg-red-100" // Apply custom class name
value={value}
min={getAgoDate(10)}
max={getAgoDate(0)}
className="form-control  border-0 w-full bg-red-100"
// Other props for customization
/> */}
</div>
</div>
    );
};


const formatDateString = (inputDate) => {
    const date = new Date(inputDate);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Months are zero-indexed
    const year = date.getUTCFullYear();
  
    // Use padStart to ensure two-digit format
    const formattedDay = String(day).padStart(2, '0');
    const formattedMonth = String(month).padStart(2, '0');
  
    return `${formattedDay}/${formattedMonth}/${year}`;
};

export {getAgoDate, StartDate, EndDate, formatDateString};
