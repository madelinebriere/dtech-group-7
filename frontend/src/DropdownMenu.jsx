import React, { useState, useEffect, useRef } from "react";
import menu from './menu.png';
import { Link } from "react-router-dom";

export const DropdownMenu = () => {
    const [open, setOpen] = useState(false);
    let menuRef = useRef();
    useEffect(() => {
        let handler = (e)=>{
          if(!menuRef.current.contains(e.target)){
            setOpen(false);
          }      
        };
    
        document.addEventListener("mousedown", handler);
        
        return() =>{
          document.removeEventListener("mousedown", handler);
        }
    
      });
      
    function handleClick(){
        setOpen(!open);
    }

    return (
        <div className = "DropDownMenu">
        <div className="menu-container" onClick={(e)=>handleClick()} ref={menuRef}>
            <div className="menu-trigger">
                <img src={menu} className="menu-icon"></img>
            </div>
                
            <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
                <ul>
                    <DropdownItem text="Home" path = "/Home" />
                    <DropdownItem text="Learning Modules" path="/Learning1" />
                    <DropdownItem text="Quiz" path="/Quiz" />
                    <DropdownItem text={"Market Simulator"} />
                    <DropdownItem text="Chatbot" path="/Bot" />
                </ul>
            </div> 
        </div>
        </div>
    );
}

function DropdownItem(props) {
    return (
        <li className="dropdownItem">
            <Link to={props.path}>{props.text}</Link>
        </li>
    );
}

export default DropdownMenu;



