import { useState } from 'react';
import styles from './styles.module.css';
import ToDoItem from './ToDoItem';

const ToDo = () => {
  const [todos, setTodos] = useState([
    { id: 'id1', task: 'React', status: true },
    { id: 'id3', task: 'Practice', status: false },
    { id: 'id4', task: 'Pre commit issue', status: true },
    { id: 'id2', task: 'Javascript', status: false },
  ]);

  const handleStatusClick = (taskId) => {
    const todoIndex = todos.findIndex((todo) => todo.id === taskId);

    todos[todoIndex].status = !todos[todoIndex].status;
    const updatedTodos = JSON.stringify(todos);

    setTodos(JSON.parse(updatedTodos));
  };

  return (
    <div class={styles.container}>
      <header class={styles.header}>ToDo</header>
      <main class={styles.body}>
        {todos.map((todo) => (
          <ToDoItem
            id={todo.id}
            task={todo.task}
            status={todo.status}
            onStatusClick={handleStatusClick}
          />
        ))}
      </main>
    </div>
  );
};

export { ToDo };
