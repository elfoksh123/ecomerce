import { Component, inject } from '@angular/core';
import{AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"
import { AuthService } from '../../core/services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,],
  // import { AuthService } from './../../core/services/auth/auth.service';

templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private readonly authService=inject(AuthService)
  isloading:boolean=false;
 
  register:FormGroup=new FormGroup({
    name:new FormControl(null ,[Validators.required ,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl(null,[Validators.required ,Validators.email]),
    password:new FormControl(null,[Validators.required ,Validators.pattern(/^[A-Z]\W{7,}$/)]),
    rePassword:new FormControl(null ,[Validators.required ]),
    phone:new FormControl(null,[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
  },{validators :this.confirmPassword});
  submitForm():void{
   if(this.register.valid){
    this.isloading=true
    this.authService.sendRegisterForm(this.register.value).subscribe({
      next:(res)=>{
        console.log(res);
        if(res.message === 'success'){
          
        }
        this.isloading=false
        

      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        err.error.message
        this.isloading=false;
        
      }
    })
    
   }

  }
  confirmPassword(group: AbstractControl){
   const password= group.get('password')?.value
   const rePassword= group.get('rePassword')?.value
   return password === rePassword ? null : {mismatch:true}
  //  if(password === rePassword){
  //   return null;


  //  }else{
  //   return {mismatch:true}
  //  }

  }

}
