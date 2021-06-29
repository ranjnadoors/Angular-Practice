import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators, FormBuilder,NG_VALIDATORS } from '@angular/forms';
import{UserserviceService} from '../userservice.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  //providers:[UserserviceService]
})
export class RegisterComponent implements OnInit {
register:any=FormGroup;
name:any="";
address:string="";
age:string="";
mobile:string="";
email:string="";
errors:any;
isSubmitted:boolean=false;
text:string="";
data:any;
isPost:boolean=false;
post:any=FormGroup;

constructor(private frmbuilder:FormBuilder, private _userservice:UserserviceService) {
  this.register = frmbuilder.group({
    name:["",[Validators.required,Validators.minLength(4)]] ,                                                     
     address:["",[Validators.required]],
     age:["",[Validators.required,Validators.minLength(1),Validators.maxLength(2)]],
     mobile:["",[Validators.required,Validators.maxLength(10)]],
     email:["",[Validators.required,Validators.email]] 
    });
    
    this.post= frmbuilder.group({
      fname:["",[Validators.required]],
      lname:["",Validators.required],
      email:["",Validators.required,Validators.email],
      password:["",Validators.required],
      phone:["",Validators.required]
    })
 }
 
 get registerFormControl() { //access of all form controls... like textbox...
  return this.register.controls;
 }

 get postFormControl(){
   return this.post.controls;
 }
 
  ngOnInit() {


    console.log("one")

      setTimeout(() => {
          console.log("lllllllllllllllllllllllllllllll")
      }, 3000);

    this._userservice.getEmployee().subscribe((kushbhi:any)=>{
      console.log("data-----",kushbhi)
      this.data = kushbhi.data
    })

    console.log("tow")

  //  this.text=this._userservice.usermethod()    
  //  console.log(this.text)                                        
                                                           
    
  }
  onRegister(){
    this.isSubmitted = true;
    console.log(this.register.valid);
   if(this.register.valid === true ){
      //call service
   }
    
    }

    addAgent(){
      this.isPost=true;
      let data =  {
         fname_en : "sanjeev",
         lname_en : "kumar",
         email: "sanjeev@gmail.com",
         phone : "1212112112",
         password : "dasdasd" 
      }
      console.log(this.post.value);
      this._userservice.addAgent(this.post.value).subscribe(res=>{
       console.log("response--->",res)
      },err=>{
        console.log("erro---->",err)
      })
    }
   
    
      
    
}
