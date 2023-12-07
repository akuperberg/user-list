import { Component } from '@angular/core';
import { UsersService } from '../../services/user.service';
import { IUser } from '../../interfaces/IUser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users: IUser[] = [];
  users$!: Observable<IUser[]>;
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
