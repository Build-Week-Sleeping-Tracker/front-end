import React, {useState} from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const Form = () => {

  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedDate2, setSelectedDate2] =useState(null)
  const[selectedDate3, setSelectedDate3] =useState(null)
  const [chosenEmoji, setChosenEmoji] =useState(null)

  const onEmojiClick = (event, emojiOblect) => {
    setChosenEmoji(emojiOblect);
  }


  return (

    <div className="App">
    <h1> Sleep Tracker</h1>
    <div className="container1">
    <div className="datediv">
     <DatePicker selected={selectedDate} 
     onChange={date => setSelectedDate(date)}
     dateFormat='MM/dd/yyyy'
     minDate={new Date}
     isClearable
     showYearDropdown
     scrollableYearDropdown

    />
    <input type="time"></input>
  
     </div>
    <div  className="datediv">
     <DatePicker selected={selectedDate2} 
     onChange={date => setSelectedDate2(date)}
     dateFormat='MM/dd/yyyy'
     minDate={new Date}
     isClearable
     showYearDropdown
     scrollableYearDropdown
     />
     <input type="time"></input>

     </div>
     <div  className="datediv" className="lastdiv">
     <DatePicker selected={selectedDate3} 
     onChange={date => setSelectedDate3(date)}
     dateFormat='MM/dd/yyyy'
     minDate={new Date}
     isClearable
     showYearDropdown
     scrollableYearDropdown
     />
     <input type="time"></input>

     </div>
     </div>
    
    </div>
    
  );
}

export default Form
import React, {useState} from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const Form = () => {

  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedDate2, setSelectedDate2] =useState(null)
  const[selectedDate3, setSelectedDate3] =useState(null)
  const [chosenEmoji, setChosenEmoji] =useState(null)

  const onEmojiClick = (event, emojiOblect) => {
    setChosenEmoji(emojiOblect);
  }


  return (

    <div className="App">
    <h1> Sleep Tracker</h1>
    <div className="container1">
    <div className="datediv">
     <DatePicker selected={selectedDate} 
     onChange={date => setSelectedDate(date)}
     dateFormat='MM/dd/yyyy'
     minDate={new Date}
     isClearable
     showYearDropdown
     scrollableYearDropdown

    />
    <input type="time"></input>
  
     </div>
    <div  className="datediv">
     <DatePicker selected={selectedDate2} 
     onChange={date => setSelectedDate2(date)}
     dateFormat='MM/dd/yyyy'
     minDate={new Date}
     isClearable
     showYearDropdown
     scrollableYearDropdown
     />
     <input type="time"></input>

     </div>
     <div  className="datediv" className="lastdiv">
     <DatePicker selected={selectedDate3} 
     onChange={date => setSelectedDate3(date)}
     dateFormat='MM/dd/yyyy'
     minDate={new Date}
     isClearable
     showYearDropdown
     scrollableYearDropdown
     />
     <input type="time"></input>

     </div>
     </div>
    
    </div>
    
  );
}

export default Form
import React, {useState} from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const Form = () => {

  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedDate2, setSelectedDate2] =useState(null)
  const[selectedDate3, setSelectedDate3] =useState(null)
  const [chosenEmoji, setChosenEmoji] =useState(null)

  const onEmojiClick = (event, emojiOblect) => {
    setChosenEmoji(emojiOblect);
  }


  return (

    <div className="App">
    <h1> Sleep Tracker</h1>
    <div className="container1">
    <div className="datediv">
     <DatePicker selected={selectedDate} 
     onChange={date => setSelectedDate(date)}
     dateFormat='MM/dd/yyyy'
     minDate={new Date}
     isClearable
     showYearDropdown
     scrollableYearDropdown

    />
    <input type="time"></input>
  
     </div>
    <div  className="datediv">
     <DatePicker selected={selectedDate2} 
     onChange={date => setSelectedDate2(date)}
     dateFormat='MM/dd/yyyy'
     minDate={new Date}
     isClearable
     showYearDropdown
     scrollableYearDropdown
     />
     <input type="time"></input>

     </div>
     <div  className="datediv" className="lastdiv">
     <DatePicker selected={selectedDate3} 
     onChange={date => setSelectedDate3(date)}
     dateFormat='MM/dd/yyyy'
     minDate={new Date}
     isClearable
     showYearDropdown
     scrollableYearDropdown
     />
     <input type="time"></input>

     </div>
     </div>
    
    </div>
    
  );
}

export default Form
