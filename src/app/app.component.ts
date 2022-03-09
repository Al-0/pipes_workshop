import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    {name: 'Mister A', age: 21},
    {name: 'Doctor K', age: 72},
    {name: 'King E', age: 43}
  ];

  addUser() {
    this.users.push({name: 'Queen V', age: 80});
    // this.users = [...this.users, {name: 'Queen V', age: 80}]
  }
}
