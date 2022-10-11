import React,{useState} from "react";

    function CardRigth({visibilityRigth}) {
  const [datacard] = useState([
    {
      
      list: "History",
      id:"awq"
    },
    {
      
      list: "our Team",
      id:"nsh"
    },
    {
      
      list: "Blog",
      id:"knndk"
    },
    
  ]);


  if (visibilityRigth === true) {
    return (
      <aside className="cardRigth">
        {datacard.map((element) => {
          return (
            <div key={element.id}>{element.list}</div>
          
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
export default CardRigth;