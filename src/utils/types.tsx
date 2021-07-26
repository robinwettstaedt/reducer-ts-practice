import React from 'react';

export type Todo = {
  todoContent: string;
  isDone: boolean;
  createdAt: number;
};

export type TodoList = Todo[];

export type TodoAction = AddTodoAction | BasicTodoAction;

export type AddTodoAction = {
  type: 'ADD_TODO';
  payload: { todoContent: string };
};

export type BasicTodoAction = {
  type: 'TOGGLE_TODO' | 'DELETE_TODO';
  payload: { createdAt: number };
};

export type TodoElementProps = {
  dispatch: React.Dispatch<TodoAction>;
  todo: Todo;
};
