import { Holiday,CountriesList } from "../types/Holiday";



export const fetchHolidays =async (selectedVal:string):Promise<Holiday> =>{
    const response= await fetch(`https://holiday-tracker-backend.labs.crio.do/holidays?country=${selectedVal}`);
    if(!response.ok){
        throw new Error("user not found")
    }
    const data = await response.json();
    return data

}


export const countriesData = async () =>{
const response = await fetch("https://holiday-tracker-backend.labs.crio.do/countries")
if(!response.ok){
    throw new Error ("cannot fetch Countries");
}
else{
    const data =await response.json();
    return data
}
}