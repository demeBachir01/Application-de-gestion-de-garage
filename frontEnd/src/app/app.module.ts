import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { NaveBarComponent } from './nave-bar/nave-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { VoyageComponent } from './voyage/voyage.component';
import { DepartComponent } from './depart/depart.component';
import { VoitureComponent } from './voiture/voiture.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddpassagerComponent } from './passager/addpassager/addpassager.component';
import { PassagerComponent } from './passager/passager/passager.component';
import { GarageComponent } from './garage/garage/garage.component';
import { AddgarageComponent } from './garage/addgarage/addgarage.component';
import { FaqComponent } from './faq/faq.component';
import { AproposComponent } from './apropos/apropos.component';
import { InterceptInterceptor } from './intercept.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NaveBarComponent,
    FooterComponent,
    LoginComponent,
    InscriptionComponent,
    VoyageComponent,
    DepartComponent,
    VoitureComponent,
    AddpassagerComponent,
    PassagerComponent,
    GarageComponent,
    AddgarageComponent,
    FaqComponent,
    AproposComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [InterceptInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
