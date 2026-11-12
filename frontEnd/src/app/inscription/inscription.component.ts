import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/Services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  constructor(private auth:AuthentificationService, private router : Router){}
  user: any = []
  passConf!:string

  passError = false;
  passConfError = false;
  emailError = false;


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
  passwordConfirmVerif(pass1:string, pass2:string){
    if(pass1 != pass2){
      this.passConfError=true
    }else{
      this.passConfError=false
    }

  }

  registerUser(){
console.log(this.user.nom);

    this.auth.register(this.user.prenom,this.user.nom,this.user.adresse,this.user.numtel,this.user.email,this.user.password)
    .subscribe({
      next:(data) => {
        if(data && data.body && data.body['message'] === "already"){
          this.showAlertMessage('Erreur','Un compte avec '+this.user.email+' exite déjà','warning')
      }
      else if(data){
        this.user.prenom = data.prenom;
        this.user.nom = data.nom;
        this.user.adresse = data.adresse;
        this.user.numtel = data.numtel;
        this.user.email = data.email;
        this.user.password = data.password;
        this.passConf = ""
        this.showAlertMessage("success","Inscription réussie","success")
         const Toast = Swal.mixin({

         toast: true,
         position: "top-end",
         showConfirmButton: false,
         timer: 3000,
         timerProgressBar: true,
         didOpen: (toast) => {
           toast.addEventListener('mouseenter', Swal.stopTimer)
           toast.addEventListener('mouseleave', Swal.resumeTimer)
         }
       })

       Toast.fire({
         icon: "success",
         title: "Inscription réussie"
       })
         this.router.navigate(["/login"])
         console.log('Inscription reussi')
}

      },
      error:(err) => {
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
      confirmButtonText: 'Se connecter',

    }).then((result)=>{
        if(result.isConfirmed){
          if(icon == "warning"){

            this.router.navigate(["/login"])
          }

        }
    })
  }


}
