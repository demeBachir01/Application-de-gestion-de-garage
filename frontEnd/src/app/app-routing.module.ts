import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { VoyageComponent } from './voyage/voyage.component';
import { VoitureComponent } from './voiture/voiture.component';
import { DepartComponent } from './depart/depart.component';
import { PassagerComponent } from './passager/passager/passager.component';
import { GarageComponent } from './garage/garage/garage.component';
import { FaqComponent } from './faq/faq.component';
import { AproposComponent } from './apropos/apropos.component';

const routes: Routes = [
  {path: '', redirectTo:'/accueil', pathMatch:'full'},
  {path:'accueil', component:AccueilComponent},
  {path:'login', component:LoginComponent},
  {path:'inscription', component:InscriptionComponent},
  {path:'voyage', component:VoyageComponent},
  {path:'voiture', component:VoitureComponent},
  {path:'depart', component:DepartComponent},
  {path:'passager',component:PassagerComponent},
  {path:'garage',component:GarageComponent},
  {path:'faq',component:FaqComponent},
  {path:'apropos',component:AproposComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
