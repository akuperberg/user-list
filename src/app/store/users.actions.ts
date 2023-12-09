import { createAction, props } from '@ngrx/store';
import { IUser } from './../interfaces/IUser';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: IUser[] }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: Error }>());
