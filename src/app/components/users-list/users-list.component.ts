import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  @Input() users: IUser[] | null = [];
}
