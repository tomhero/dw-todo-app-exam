import Todo, { todoAction } from './todo';

describe('Redux Todo Reducer', () => {
  const initial = {
    todoList: [],
    todoCount: 0,
    doneTodoCount: 0,
    isLoading: false,
  };

  it('should create reducer with initial props', () => {
    const reducer = Todo(initial, {
      type: '',
    });
    expect(reducer).toEqual(initial);
  });

  it('toggleLoading action should change isLoading state', () => {
    const expected = {
      todoList: [],
      todoCount: 0,
      doneTodoCount: 0,
      isLoading: true,
    };

    const reducer = Todo(initial, todoAction.toggleLoading());
    expect(reducer).toEqual(expected);
  });
});
