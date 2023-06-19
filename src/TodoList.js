import React from "react";
import TodoListItem from "./TodoListItem";

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
          <TodoListItem key={item.id} item={item} />
        ))}
        </ul>

    )
}

export default TodoList;