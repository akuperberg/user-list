import { createReducer, on } from '@ngrx/store';
import * as userActions from './users.actions';
import { IUser } from '../interfaces/IUser';

export interface UserState {
  users: IUser[];
  loading: boolean;
  error: any;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(userActions.loadUsers, state => ({ ...state, loading: true, error: null })),
  on(userActions.loadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),
  on(userActions.loadUsersFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
