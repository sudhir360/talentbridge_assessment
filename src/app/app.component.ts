import { AfterViewInit, Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'testapp';
  
   namepattern = /^[A-Za-z ]+$/;

  userdata:any=[]
 userFrom:FormGroup
  constructor(public fb:FormBuilder){

  }
  ngOnInit(): void {
this.userFrom=this.fb.group({
  company:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(31),Validators.pattern(this.namepattern)]),
  admin:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(31),Validators.pattern(this.namepattern)]),
  mobile:new FormControl('',[Validators.pattern(/^[0-9]{10}$/)]),
  email:new FormControl('',[Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
  date:new FormControl('')

})

  }

  get f(){
   return  this.userFrom.controls
  }

  submit(){
   
   this. userdata.push(this.userFrom.value)
   this.userFrom.reset()
  }
}