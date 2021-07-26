import React from 'react';
import { TodoElementProps } from '../utils/types';

const TodoElement = ({ dispatch, todo }: TodoElementProps) => {
  return (
    <>
      <span style={{ color: todo.isDone ? '#AAA' : '#000' }}>
        {todo.todoContent}
      </span>
      <button
        onClick={() =>
          dispatch({
            type: 'TOGGLE_TODO',
            payload: {
              createdAt: todo.createdAt,
            },
          })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'DELETE_TODO',
            payload: {
              createdAt: todo.createdAt,
            },
          })
        }
      >
        Delete
      </button>
    </>
  );
};

export default TodoElement;
