import { createAsyncThunk } from '@reduxjs/toolkit';

import { ITodoItem, TODO_STATUS } from '@models/todo';
import {
  ITodoEntity,
  requestCreateTodo,
  requestDeleteTodo,
  requestEditTodo,
  requestGetTodoList,
} from '@services/todo';

export const fetchTodoList = createAsyncThunk('todos/list', async (_, thunkAPI) => {
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
    return thunkAPI.rejectWithValue([]);
  }
});

export const createTodo = createAsyncThunk('todos/create', async (todo: ITodoItem, thunkAPI) => {
  try {
    const mappedPayload: ITodoEntity = {
      id: todo.id,
      title: todo.text,
      completed: todo.status === TODO_STATUS.DONE ? true : false,
    };
    const rawResponseTodo = await requestCreateTodo(mappedPayload);

    const responseTodo: ITodoItem = {
      id: rawResponseTodo.id,
      text: rawResponseTodo.title,
      status: rawResponseTodo.completed ? TODO_STATUS.DONE : TODO_STATUS.UNDONE,
    };

    return responseTodo;
  } catch (_) {
    return thunkAPI.rejectWithValue({});
  }
});

export const updateTodo = createAsyncThunk('todos/edit', async (todo: ITodoItem, thunkAPI) => {
  try {
    const mappedPayload: ITodoEntity = {
      id: todo.id,
      title: todo.text,
      completed: todo.status === TODO_STATUS.DONE ? true : false,
    };
    const rawResponseTodo = await requestEditTodo(mappedPayload);

    const responseTodo: ITodoItem = {
      id: todo.id,
      text: rawResponseTodo.title,
      status: rawResponseTodo.completed ? TODO_STATUS.DONE : TODO_STATUS.UNDONE,
    };

    return responseTodo;
  } catch (_) {
    return thunkAPI.rejectWithValue({});
  }
});

export const deleteTodo = createAsyncThunk('todos/delete', async (todoId: string, thunkAPI) => {
  try {
    await requestDeleteTodo(todoId);
    return {} as Record<string, never>;
  } catch (_) {
    return thunkAPI.rejectWithValue({});
  }
});
