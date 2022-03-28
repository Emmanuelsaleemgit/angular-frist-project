import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.scss']
})
export class EmployesComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
