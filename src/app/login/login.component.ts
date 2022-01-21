import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

name="Details Page"

  loginForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
    address:['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
    date:['',[Validators.required,Validators.pattern('[0-9]*')]],
    phone:['',[Validators.required,Validators.pattern('0-9*')]],
  })


  uname=" "
  address=""
  date=""
  admin=""
  manager=""
  HR=""
  engineer=""
  phone=""
  gender=""

  list:any[]=[]

  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  submitClick(item:any){
 this.list.push({id:this.list.length,uname:item,address:item,date:item,admin:item,manager:item,HR:item,engineer:item})
 console.log(this.list);
 
//  this.router.navigateByUrl('home-page')

  }
 


  





}
