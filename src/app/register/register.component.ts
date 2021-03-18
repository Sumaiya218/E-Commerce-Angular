import { Component, OnInit } from '@angular/core';
import { NG_VALIDATORS, FormBuilder, FormGroup,  FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  dataOfUser:FormGroup | any;
  constructor( private fb: FormBuilder) {}
  ngOnInit(): void {
    this.dataOfUser = this.fb.group({
      firstName: ["" , [Validators.required ]],
      Email: ["" , [Validators.required , Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      userName: ["" , [Validators.required , Validators.pattern("^[A-Za-z]*$")]],
      password: ["" , [Validators.required , Validators.minLength(8)]],
      confirmpassword: ["" , [Validators.required , Validators.minLength(8)]]
    })
  }
  dateRegister(){
    console.log(this.dataOfUser);
  }

  get registerFormControls (){
    return this.dataOfUser.controls;
  }
}
