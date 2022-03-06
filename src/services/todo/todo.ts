import { TODO_API_URL } from '@models/constant';
import { ITodoItem } from '@models/todo';

export interface ITodoResponse {
  id: string;
  title: string;
  completed: boolean;
}

export type TodoResponseType = Omit<ITodoResponse, 'id'>;

export async function requestGetTodoList(): Promise<ITodoResponse[]> {
  const response = await fetch(`${TODO_API_URL}/todos`, { method: 'GET' });
  return (await response.json()) as ITodoResponse[];
}

export async function requestCreateTodo(newTodo: ITodoItem): Promise<ITodoResponse> {
  const response = await fetch(`${TODO_API_URL}/todos`, {
    method: 'POST',
    body: JSON.stringify(newTodo),
  });
  return (await response.json()) as ITodoResponse;
}

export async function requestEditTodo(todo: ITodoItem): Promise<TodoResponseType> {
  // NOTE : Extract todo data here
  const { id, ...todoData } = todo;
  const response = await fetch(`${TODO_API_URL}/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(todoData),
  });
  return (await response.json()) as TodoResponseType;
}

export async function requestDeleteTodo(todoId: string): Promise<Record<string, never>> {
  const response = await fetch(`${TODO_API_URL}/todos/${todoId}`, { method: 'DELETE' });
  return await response.json();
}
