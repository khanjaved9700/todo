import React, { useState } from "react";
import TodoList from "./TodoList";


const App=()=>{
  const[data,setData]=useState("");
  const[items,setItems]=useState([]);
  
  const onItems=()=>{
    setItems((oldItems)=>{
      return[...oldItems,data];
    });
    setData('');
  }
  const itemEvent=(event)=>{
    setData(event.target.value);
  };

  const deletedItem=(id)=>{
    alert("Are You Really Want To Delete?");
    setItems((oldItems)=>{
      return oldItems.filter((arrEle,index)=>{
        return index!==id;
      });
    });
  };

  return(
    <>
    <div className="out_box">
      <div className="in_box">
      <br />
      <h1>ToDo List</h1>
      <br />
        <input type="text" placeholder="Add Items"
        value={data}
        onChange={itemEvent}/>
        <button onClick={onItems}>+</button>
        <ol>
          {items.map((itemsval,index)=>{
           return <TodoList
           text={itemsval}
           key={index}
           id={index}
           onSelect={deletedItem}
           />
          })}
        </ol>
      </div>
    </div>
    </>
  );
}
export default App;