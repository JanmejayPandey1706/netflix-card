import React from "react";
import ReactDOM from "react-dom"; 
import Card from "./Cards"
import "./index.css";
import Sdata from "./Sdata";



ReactDOM.render(
  <>
 
    <h1 className='heading_style'>  List of top 6 Netflix series in 2021 </h1>
    
    {Sdata.map((val) => {
      return (
        <Card
           imgsrc= {val.imgsrc}
           tittle= {val.tittle}
           sname= {val.sname}
           link= {val.links}
     
        />
      );

    })}
  </>,
document.getElementById('root')
);


