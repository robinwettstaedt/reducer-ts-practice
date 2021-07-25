import React from 'react';

export type Todo = {
  todoContent: string;
  isDone: boolean;
  createdAt: number;
};

export type TodoList = Todo[];

export type TodoAction = {
  type: 'ADD_TODO' | 'TOGGLE_TODO' | 'DELETE_TODO';
  payload: Todo;
};

export type TodoElementProps = {
  dispatch: React.Dispatch<TodoAction>;
  todo: Todo;
};
