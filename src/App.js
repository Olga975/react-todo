import React from 'react';

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

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>To Do List</h1>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
