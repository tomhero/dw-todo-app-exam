export enum TODO_STATUS {
  UNDONE,
  DONE,
}

export interface ITodoItem {
  id: string;
  text: string;
  status: TODO_STATUS;
}

export type TodoAction = 'edit' | 'delete';
