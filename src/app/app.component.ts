import { Component } from '@angular/core';
import { UsersdataService } from './usersdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myFirst';
  name = 'emmanuel';
  date =Date.now();
  str = "hello emmanuel"; 
  val = 10;
  show =true; //for boolen value
  show_string = "not" //string value
  color = 'blue' //if ifelse
  colors = 'red' //switch case statment
  data=['emmanuel','saleem','adill','anil','faisal',]
  datas=[
    {
      name: 'emmanuel',
      last:'saleem',
      father:'saleem',
      
    },
    {
      name: 'adil',
      last:'saleem',
      father:'saleem',
      
    },
    {
      name: 'anil',
      last:'saleem',
      father:'saleem',
      
    },
  ]
  users={
    name:'emmanuel',
    age:'22',
    last_name:'saleem'
  }
  getName()
  {
    return "salemm"
  }
  myevent(ent:any)
  {
    console.log(ent)

  }
  disabledbox=true
  enabel()
  {
    this.disabledbox=false
  }
  obj={
    name :"emmanule",
    father: "saleem",
    age :"22",
  }
  arr=['emmanuel','salemm','adil']
  getthename()
  {
    alert('emmanuel')
  }
  // getthenames(name) not working why
  // {
  //   alert(name)
  // }
  getformdata(value:any)
  {
    console.log(value)
  }
  dat="";
  parentconpontcontroler(data)
  {
    console.log(data)
    this.dat=data
  }
  item="";
  // constructor(private user:UsersdataService)
  // {
  //   console.log(this.user.getdatuser())
  //   let data = this.user.getdatuser();
  //   this.item = data.name

  // }
  usersdata=[];
  constructor(private user:UsersdataService)
  {
    this.user.getapidata().subscribe(data=>{
      console.log(data)
      // this.usersdata=data
    })
    
  }
}
