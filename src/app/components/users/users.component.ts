import { loadUsers } from './../../store/users.actions';
import { Component } from '@angular/core';
import { UsersService } from '../../services/user.service';
import { IUser } from '../../interfaces/IUser';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectUsers } from '../../store/users.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users$!: Observable<IUser[]>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.store.dispatch(loadUsers());
    this.users$ = this.store.pipe(select(selectUsers));
  }
}
