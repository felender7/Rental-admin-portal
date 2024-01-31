import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      gender: 'male',
      age: 32,
      phone: '(212) 555-1234',
      avatar: 'assets/profile1.jpeg',
    },
    {
      id: 2,
      name: 'John Smith',
      email: 'john.smith@example.com',
      gender: 'male',
      age: 32,
      phone: '(212) 555-1234',
      avatar: 'assets/profile2.jpeg',
    },
    {
      id: 3,
      name: 'John Smith',
      email: 'john.smith@example.com',
      gender: 'male',
      age: 32,
      phone: '(212) 555-1234',
      avatar: 'assets/profile3.jpeg',
    },
    {
      id: 4,
      name: 'John Smith',
      email: 'john.smith@example.com',
      gender: 'male',
      age: 32,
      phone: '(212) 555-1234',
      avatar: 'assets/profile4.jpeg',
    },
    {
      id: 5,
      name: 'John Smith',
      email: 'john.smith@example.com',
      gender: 'male',
      age: 32,
      phone: '(212) 555-1234',
      avatar: 'assets/profile1.jpeg',
    },


  ];
}
