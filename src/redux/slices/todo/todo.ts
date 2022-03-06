import { ITodoItem, TODO_STATUS } from '@models/todo';
import { createSlice } from '@reduxjs/toolkit';

import { createTodo, deleteTodo, fetchTodoList, updateTodo } from './thunk';

interface ITodoState {
  todoList: ITodoItem[];
  todoCount: number;
  doneTodoCount: number;
  isLoading: boolean;
}

const initialState: ITodoState = {
  todoList: [],
  todoCount: 0,
  doneTodoCount: 0,
  isLoading: false,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodoList.fulfilled, (state, action) => {
      if (action.payload) {
        state.todoList = action.payload;
        state.todoCount = action.payload.length;
        state.doneTodoCount = action.payload.filter(
          (todo) => todo.status === TODO_STATUS.DONE,
        ).length;
      }
    });
    builder.addCase(createTodo.fulfilled, (state, { meta, payload }) => {
      if (payload) {
        state.todoList.push(meta.arg);
        state.todoCount++;
      }
    });
    builder.addCase(updateTodo.fulfilled, (state, { meta, payload }) => {
      if (payload) {
        const updatedTodoIndex = state.todoList.findIndex((todo) => todo.id === meta.arg.id);
        if (updatedTodoIndex >= 0) {
          state.todoList = state.todoList.splice(updatedTodoIndex, 1, meta.arg);
          state.doneTodoCount = state.todoList.filter(
            (todo) => todo.status === TODO_STATUS.DONE,
          ).length;
        }
      }
    });
    builder.addCase(deleteTodo.fulfilled, (state, { meta }) => {
      const deletedTodoIndex = state.todoList.findIndex((todo) => todo.id === meta.arg);
      state.todoList = state.todoList.splice(deletedTodoIndex, 1);
      state.todoCount--;
    });
  },
});

export const todoAction = todoSlice.actions;

export default todoSlice.reducer;
