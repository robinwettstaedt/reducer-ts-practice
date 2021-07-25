import { useState, useReducer } from 'react';
import { Todo, TodoList, TodoAction } from './utils/types';
import TodoElement from './components/TodoElement';

const reducer = (todos: TodoList, action: TodoAction): TodoList => {
  if (action.type === 'ADD_TODO') {
    const newTodo = createNewTodo(action.payload.todoContent);
    if (newTodo !== null) {
      return [...todos, newTodo];
    } else {
      return [...todos];
    }
  }

  if (action.type === 'TOGGLE_TODO') {
    return todos.map((todo: Todo) => {
      if (todo.createdAt === action.payload.createdAt) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
  }

  if (action.type === 'DELETE_TODO') {
    return todos.filter(
      (todo: Todo) => todo.createdAt !== action.payload.createdAt
    );
  }

  return todos;
};

const createNewTodo = (todoText: string): Todo | null => {
  if (todoText.length > 0) {
    return {
      todoContent: todoText,
      isDone: false,
      createdAt: Date.now(),
    };
  }
  return null;
};

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TODO',
      payload: { todoContent: userInput, isDone: false, createdAt: 0 },
    });
    setUserInput('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </form>
      {todos.map((todo: Todo) => (
        <TodoElement key={todo.createdAt} todo={todo} dispatch={dispatch} />
      ))}
    </>
  );
};

export default App;
