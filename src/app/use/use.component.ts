import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-use',
  templateUrl: './use.component.html',
  styleUrls: ['./use.component.scss']
})
export class UseComponent implements OnInit {
  @Input() hero;

  constructor() { }

  ngOnInit(): void {
    console.log(this.hero)
  }

}
