import { combineReducers } from 'redux';
import { PostReducer } from './PostReducer';
import { UserReducer } from './userReducer';

export const rootReducer = combineReducers({
  user: UserReducer,
  post: PostReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
