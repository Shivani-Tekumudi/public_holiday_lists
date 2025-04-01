import React,{useState,useEffect} from "react";
import HolidayForm from "./components/HolidayForm";
import HolidayList from "./components/HolidayList";
import { Holiday } from "./types/Holiday";
import { fetchHolidays } from "./api/holidayApi";
import "./index.css"

const App : React.FC =() =>{
    const [holidays, setHolidays] = useState<Holiday[] | null>(null);
    const [error,setError] = useState('') 


const onSearch = async (selectedVal:string) =>{
    
    try{
    const holidaylist = await fetchHolidays(selectedVal);
   
    setHolidays(Array.isArray(holidaylist) ? holidaylist : [holidaylist]);
    }
    catch (error){
    //   setError("user Not found");
    //   setUser(null);
    console.log(error);
    setError("Failed to fetch holidays");

    
    
    }
}

    return(
        <div>
            <h2> Public Holiday Tracker</h2>
        <HolidayForm onSearch={onSearch} />
        {error && <h3>{error}</h3>}
        {holidays && <HolidayList holidays={holidays} />}
        
        </div>
    )
}
export default App