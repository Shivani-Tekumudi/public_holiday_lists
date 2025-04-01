import React from "react";
import { Holiday } from "../types/Holiday";

interface HolidayListProps {
  holidays: Holiday[] | null; // Change from Holiday | null to Holiday[] | null
}

const HolidayList: React.FC<HolidayListProps> = ({ holidays }) => {

const converDate =(date: string) =>{
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date(date);
    let name = month[d.getMonth()];
    let dat = d.getDate();
    const finalDate = dat+" " + name;
    console.log(finalDate);
    return finalDate;
    


}

  if (!holidays) return <p>Failed to fetch holidays</p>;

  return (
    <div>
      {holidays.map((ele, index) => {
        return (
          <div id="holiday-list"  className="card" key={index}>
            <div className="card-body text-center">
              <h4>{ele["Holiday Name"]}</h4>
              <p>{converDate(ele.Date)}</p>
              <p>{ele.Type}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HolidayList;
