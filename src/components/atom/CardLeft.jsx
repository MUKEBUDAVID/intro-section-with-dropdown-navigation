import React, { useState } from "react";
import "../../Style/App.scss";
import todo from "../../assets/images/icon-todo.svg";
import calendar from "../../assets/images/icon-calendar.svg";
import reminders from "../../assets/images/icon-reminders.svg";
import planning from "../../assets/images/icon-planning.svg";

function CardLeft({visibilityLeft}) {
  const [datacard] = useState([
    {
      emoji: todo,
      list: "Todo List",
      id:"awqwq"
    },
    {
      emoji: calendar,
      list: "Calendar",
      id:"nshisksk"
    },
    {
      emoji: reminders,
      list: "Reminders",
      id:"knndkcndnc"
    },
    {
      emoji: planning,
      list: "Planning",
      id:"jdjcnjdc"
    },
  ]);



  if (visibilityLeft=== true) {
    return (
      <aside className="cardleft">
        {datacard.map((element) => {
          return (
            <div key={element.id}><img src={element.emoji} alt={element.list} />    <p>{element.list}</p></div>
          
          )
        
        })}
      
      </aside>
    );
  }


  return (
    <React.Fragment>

    </React.Fragment>
  )
    
  

  
}

export default CardLeft;
