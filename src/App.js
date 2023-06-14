import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>To Do List</h1>
      <TodoList />
      <AddTodoForm />

    </div>
  );
}

export default App;
