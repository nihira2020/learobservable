import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'learobservable';
  users:any;
  userabervable$:any;
  currentstatus:any;

  ngOnInit(): void {
    this.users=['ram','rajan','rahul'];
    this.userabervable$=of(this.users);
    console.log(this.userabervable$);
    new Observable(item=>{

      setTimeout(()=>{
item.next('In Progress')
      },2000);

      setTimeout(()=>{
        item.next('Pending')
              },4000);

              setTimeout(()=>{
                item.next('Completed')
                      },6000);

    }).subscribe(result=>{
      this.currentstatus=result;
    });
    
  }
}
