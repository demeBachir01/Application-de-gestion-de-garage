import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/Services/auth.service';
import { TokenStorageService } from 'src/Services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth:AuthentificationService,
              private router : Router,
              private tokenStorage : TokenStorageService){}

  user: any = []
  passConf!:string

  passError = false;
  passConfError = false;
  emailError = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  emailVerif(email:string){

    if((email.endsWith("@gmail.com"))||(email.endsWith("@yahoo.com"))||
       (email.endsWith("@hotmail.com"))||(email.endsWith("@hotmail.fr"))||
       (email.endsWith("@yahoo.fr"))||(email.endsWith("edu.sn"))||(email.endsWith(".sn"))){

      this.emailError = false
    }
    else{
      this.emailError = true
    }

  }

  passwordLengthVerif(pass:string){

    if(pass.length < 6){
      this.passError =  true

  }
  else if(pass.length >= 5){
      setTimeout(
        ()=>{
              this.passError =  false

        },100
      )
  }
  }
  loginUser(){
    const { email, password } = this.user;
    this.auth.login(email, password)
    .subscribe({
      next:(data:any) => {
        if(data.body['message'] == "successfully"){
          localStorage.setItem('token','logged')
          this.router.navigate(["/home/index"])
      }
      else{
        this.showAlertMessage("Error","Login et/ou mot de passe incorrect","error")
      }

      },
      error:(err: any) => {
        console.log(err);
        this.showAlertMessage("Error","Erreur au niveau du serveur","warning")
      }
    })
  }
showAlertMessage( title:string, message:string, icon:any ,showCancelButton = true){
  return Swal.fire({
    title: title,
    text: message,
    icon: icon,
    showCloseButton: true,
    showCancelButton: false,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Réessayer',

  }).then((result:any)=>{
      if(result.isConfirmed){
      }
  })
}

userUrlBase = "";

onSubmit() : void {
  const { email, password } = this.user;
  this.auth.login(email, password).subscribe(
    data => {
      this.tokenStorage.saveToken(data.token);
      this.tokenStorage.saveUser(data);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;

      if(this.roles.includes('ADMIN')){
        this.userUrlBase ="admin";
      }
      if(this.roles.includes('CHAUFFEUR')){
        this.userUrlBase ="chauffeur";
      }
      if(this.roles.includes('ROLE_ETUDIANT')){
        this.userUrlBase ="etudiant";
      }
      //this.reloadPage();
      this.router.navigate([this.userUrlBase]);
    },
    err => {
      console.log(err);
      if(err.error.message =="Bad credentials"){
        this.errorMessage = 'Identifiant ou mot de passe incorrect';
      }else if(err.error.message == "User is disabled"){
        this.errorMessage = "Ce compte n'est pas actif";
      }else {
        this.errorMessage = "Une erreur inattendue est survenue; contacter l'administrateur";
      }
      //this.errorMessage = "Une erreur inattendue est survenue; contacter l'administrateur";
      console.log(err);
      this.isLoginFailed = true;
    }
  );
}
}
