import { TODO_API_URL } from '@models/constant';
import { jsonHeaders } from '@services/config';

export interface ITodoEntity {
  id: string;
  title: string;
  completed: boolean;
}

export async function requestGetTodoList(): Promise<ITodoEntity[]> {
  const response = await fetch(`${TODO_API_URL}/todos`, { method: 'GET', headers: jsonHeaders });
  return (await response.json()) as ITodoEntity[];
}

export async function requestCreateTodo(newTodo: ITodoEntity): Promise<ITodoEntity> {
  const response = await fetch(`${TODO_API_URL}/todos`, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: jsonHeaders,
  });
  return (await response.json()) as ITodoEntity;
}

export async function requestEditTodo(todo: ITodoEntity): Promise<ITodoEntity> {
  // NOTE : Extract todo data here
  const { id, ...todoData } = todo;
  const response = await fetch(`${TODO_API_URL}/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(todoData),
    headers: jsonHeaders,
  });
  return (await response.json()) as ITodoEntity;
}

export async function requestDeleteTodo(todoId: string): Promise<Record<string, never>> {
  const response = await fetch(`${TODO_API_URL}/todos/${todoId}`, {
    method: 'DELETE',
    headers: jsonHeaders,
  });
  return await response.json();
}
