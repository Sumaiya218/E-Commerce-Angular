import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formData : FormGroup;
  constructor( private fb : FormBuilder) { 
    this.formData = this.fb.group({
      Name:["" , [Validators.required ]],
      Email:["" , [Validators.required , Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      userName:["" , [Validators.required , Validators.pattern("[^\s]*")]],
      password:["" , [Validators.required , Validators.minLength(8)]],
      confirmPassword:["" , [Validators.required , Validators.minLength(8)]]
    },
    {
      Validator: this.passwordConfirming
    }
    )
  }
  dateRegister(){
    console.log(this.formData.value);
  }
  get registerFormControls (){
    return this.formData.controls;
  }
  passwordConfirming(confirm:FormGroup) {    
    return confirm.controls['pass'].value === confirm.controls['confirmPass'].value ? null : {'mismatch': true};
  }
  ngOnInit(): void {
    
  }

}
