import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  list:any[]=[]

item:any

uname=" "
  address=""
  date=""
  admin=""
  manager=""
  HR=""
  engineer=""
  phone=""
  gender=""

  constructor(private router:Router,private fb:FormBuilder) {
  
   }

  ngOnInit(): void {
  }
  
}
