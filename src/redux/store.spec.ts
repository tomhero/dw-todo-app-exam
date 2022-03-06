import store from './store';

describe('Redux Store', () => {
  it('should create store with todo reducer', () => {
    const currentState = store.getState();
    expect(currentState).toHaveProperty('todo');
  });
});
