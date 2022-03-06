import { ITodoItem, TODO_STATUS } from '@models/todo';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestCreateTodo,
  requestDeleteTodo,
  requestEditTodo,
  requestGetTodoList,
} from '@services/todo';

export const fetchTodoList = createAsyncThunk('todos/list', async () => {
  try {
    const rawResponseTodoList = await requestGetTodoList();

    // NOTE : Mapping data from api layer
    const responseTodo: ITodoItem[] = rawResponseTodoList.map((todoItem) => {
      return {
        id: todoItem.id,
        text: todoItem.title,
        status: todoItem.completed ? TODO_STATUS.DONE : TODO_STATUS.UNDONE,
      };
    });

    return responseTodo;
  } catch (_) {
    // NOTE : Default error value
    return [];
  }
});

export const createTodo = createAsyncThunk('todos/create', async (todo: ITodoItem) => {
  try {
    const rawResponseTodo = await requestCreateTodo(todo);

    const responseTodo: ITodoItem = {
      id: rawResponseTodo.id,
      text: rawResponseTodo.title,
      status: rawResponseTodo.completed ? TODO_STATUS.DONE : TODO_STATUS.UNDONE,
    };

    return responseTodo;
  } catch (_) {
    return {} as ITodoItem;
  }
});

export const updateTodo = createAsyncThunk('todos/edit', async (todo: ITodoItem) => {
  try {
    const rawResponseTodo = await requestEditTodo(todo);

    const responseTodo: ITodoItem = {
      id: todo.id,
      text: rawResponseTodo.title,
      status: rawResponseTodo.completed ? TODO_STATUS.DONE : TODO_STATUS.UNDONE,
    };

    return responseTodo;
  } catch (_) {
    return {} as ITodoItem;
  }
});

export const deleteTodo = createAsyncThunk('todos/delete', async (todoId: string) => {
  try {
    await requestDeleteTodo(todoId);
    return {} as Record<string, never>;
  } catch (_) {
    return {} as Record<string, never>;
  }
});
