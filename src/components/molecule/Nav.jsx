import React,{useState} from 'react';
import CardLeft from "../atom/CardLeft";
import CardRigth from "../atom/CardRigth";
import arrow_up from "../../assets/images/icon-arrow-up.svg";
import arrow_down from "../../assets/images/icon-arrow-down.svg";


function Nav()  {
  const navData = ["Features", "Company", "Careers", "About"];
  const [arrow1, setarrow1] = useState(arrow_up);
  const [arrow2, setarrow2] = useState(arrow_up);
  const [visibilityLeft,setvisibilityLeft] = useState(false);
  const [visibilityRigth,setvisibilityRigth] = useState(false);
  
  



   const rotateArrow_left = () => {
    if (arrow1 === arrow_down) {
      setarrow1(arrow_up);
    } else {
      setarrow1(arrow_down);
    }
     
     setvisibilityLeft(true)
    
  };



     const returnrotation_left = () => {
    if (arrow1 === arrow_up) {
      setarrow1(arrow_down);
    } else {
      setarrow1(arrow_up);
    }

     setvisibilityLeft(false)
     };
  
      const rotateArrow_rigth = () => {
    if (arrow2 === arrow_down) {
      setarrow2(arrow_up);
    } else {
      setarrow2(arrow_down);
    }
        setvisibilityRigth(true)
  };
  const returnrotation_rigth = () => {
    if (arrow2 === arrow_up) {
      setarrow2(arrow_down);
    } else {
      setarrow2(arrow_up);
    }
    setvisibilityRigth(false)
  };

    
    return (
    <React.Fragment>
       {navData.map((element, index) => {
            let temp = "";
            if (index === 0) {
              temp = (
                <li className="drop" key={`${index}+${element}`} onMouseEnter={rotateArrow_left} onMouseLeave={returnrotation_left} style={{position:'relative'}} >
                  {element} <img src={arrow1} alt="arrow"  className="arrow" /> <CardLeft visibilityLeft={visibilityLeft} />
                </li>
              );
            } else if (index === 1) {
              temp = (
                <li className="drop" key={`${index}+${element}`} onMouseEnter={rotateArrow_rigth} onMouseLeave={returnrotation_rigth}>
                  {element} <img src={arrow2} alt="arrow" className="arrow" /> <CardRigth visibilityRigth={visibilityRigth} />
                </li>
              );
            } else {
              temp = <li key={`${index}+${element}`}>{element}</li>;
            }

            return temp;
       })} 
        </React.Fragment>
        
    );
};

export default Nav;