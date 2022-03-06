import { combineReducers } from 'redux';

import counter from '@redux/slices/counter';
import todo from '@redux/slices/todo/todo';

const rootReducer = combineReducers({ counter, todo });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
