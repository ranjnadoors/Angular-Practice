import { Component } from '@angular/core';
import{UserserviceService} from './userservice.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserserviceService]
})
export class AppComponent {
  title = 'reactive-form';
  text:string="";
  constructor(private _userserice:UserserviceService) {
    
  }
  ngonInit(){
    this.text=this._userserice.usermethod();
  }
}
