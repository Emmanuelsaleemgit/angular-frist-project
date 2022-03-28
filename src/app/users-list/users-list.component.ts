import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @Input() hero;
  constructor() { }

  ngOnInit(): void {
    console.log(this.hero)
  }

}
