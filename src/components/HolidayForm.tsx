import React,{useState,useEffect, FormEvent} from "react";
import axios from "axios";
// import { countriesData } from "../api/holidayApi";
// import { CountriesList } from "../types/Holiday";
interface HolidayFormProps {
    onSearch: (selectVal:string) => void;
  }
const HolidayForm:React.FC<HolidayFormProps> = ({onSearch}) =>{
    const  [countries, setCountries] = useState<string[] | null>(null)
    const [selectedVal, setSelectedVal] = useState<string>("")


const handleSubmit =(e: FormEvent) : void =>{
    e.preventDefault();
    onSearch(selectedVal);
}
const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVal(event.target.value as string);
   
  };

useEffect( () =>{
    const fetchData = async () => {
        try {
          const response = await axios.get("https://holiday-tracker-backend.labs.crio.do/countries");
         
            const data =response.data;
            setCountries(data);
           
        }
        catch(err){
            console.log(err);
            setCountries(null);
        }
         
        
      };
  
      fetchData();
    }, []); // Empty dependency array ensures the effect runs once, on component mount
   


    return(
        <>
        <form id="holiday-form" onSubmit={handleSubmit}>
            <select  id="country-select" className="form-select" value={selectedVal} onChange={handleChange}>
               
                {countries && countries.map((country, index) => (
          <option key={index} value={country}>
            {country} {/* Display country name */}
          </option>
        ))
                }
                
              
            </select>
            <button id="fetch-holidays" type="submit"> fetch holidays</button>
        </form>
        </>
    )
}
export default HolidayForm;