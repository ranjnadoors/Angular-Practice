import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:any= FormGroup;
  isShow:boolean=false;
  loginRegister:any= FormGroup;
  slectedUser:string='';
  isHide:boolean=true;

  agentUserDivShowHide=true

  constructor() { 
    
  }

  ngOnInit() {
    this.login = new FormGroup({
      name:new FormControl(''),
      email : new FormControl(''),
      password : new FormControl(''),
      usertype : new FormControl(''),
      location: new FormControl(''),
      agentid:new FormControl(''),
      address:new FormControl('')
      });
  }
  onLogin(){
 
    console.log(this.login.value);
    
    }
    onChange(event:any) {
    this.slectedUser=event.target.value;
    if(this.slectedUser == "User"){
      this.agentUserDivShowHide = true
    }
    if(this.slectedUser == "Agent"){
      this.agentUserDivShowHide = false
    }
      
  }
    
}
