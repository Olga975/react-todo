import React from "react";

const todoList = [
    {
      id: 1,
      title: "Shopping",
    },
    {
      id: 2,
      title: "Cleaning",
    },
    {
      id: 3,
      title: "Classes",
    }
    
  ];
  
function TodoList () {
    return (
        <ul>
        {todoList.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
        </ul>

    )
}

export default TodoList;