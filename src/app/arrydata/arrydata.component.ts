import { Component, OnInit,Output ,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-arrydata',
  templateUrl: './arrydata.component.html',
  styleUrls: ['./arrydata.component.scss']
})
export class ArrydataComponent implements OnInit {
  @Output() parentconpontcontroler:EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {

  }
  senddata()
  {
    this.parentconpontcontroler.emit('calling to the parent component lfsdjflkksjddlkfjdsl')

  }

}
