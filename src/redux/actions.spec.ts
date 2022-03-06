import { todoAction } from './actions';

describe('Redux Actions', () => {
  describe('Todo Actions', () => {
    it('toggleLoading should return toggleLoading.type', () => {
      const action = todoAction.toggleLoading();
      expect(action.type).toBe(todoAction.toggleLoading.type);
    });
  });
});
