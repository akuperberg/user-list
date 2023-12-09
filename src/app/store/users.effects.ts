import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import * as userActions from './users.actions';
import { UsersService } from '../services/user.service';

@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUsers),
      exhaustMap(() =>
        this.usersService.getUsers().pipe(
          map(users => userActions.loadUsersSuccess({ users })),
          catchError(error => of(userActions.loadUsersFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {}
}
