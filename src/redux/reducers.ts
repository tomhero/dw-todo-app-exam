import { combineReducers } from 'redux';

import todo from '@redux/slices/todo/todo';

const rootReducer = combineReducers({ todo });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
