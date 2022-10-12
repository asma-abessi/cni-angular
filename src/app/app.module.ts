import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule,ToastNoAnimation,ToastNoAnimationModule} from 'ngx-toastr';

import { ChartsModule } from 'ng2-charts';

import { MyProfilComponent } from './components/my-profil/my-profil.component';
import { Page404Component } from './components/page404/page404.component';

import { AjouterAvanceComponent } from './components/projet/employe/demande/avance/ajouter-avance/ajouter-avance.component';
import { CongeComponent } from './components/projet/employe/demande/conge/ajouterconge/conge.component';
import { FormationComponent } from './components/projet/employe/demande/formation/ajouterformation/formation.component';
import { AjoutTacheComponent } from './components/projet/employe/tache/ajout-tache/ajout-tache.component';

import { GestionDesAvanceComponent } from './components/projet/superviseur/gestion-des-demande/gestion-des-avance/gestion-des-avance.component';
import { GestionDeCongeComponent } from './components/projet/superviseur/gestion-des-demande/gestion-des-conge/gestion-de-conge.component';
import { GestionDeFormationComponent } from './components/projet/superviseur/gestion-des-demande/gestion-des-formation/gestion-de-formation.component';
import { GestionDesTacheComponent } from './components/projet/superviseur/gestion-des-tache/gestion-des-tache.component';

import { AvanceService } from './services/avance/avance.service';
import { CongeService } from './services/conge/conge.service';
import { FormationService } from './services/formation/formation.service';
import { TacheService } from './services/tache/tache.service';

import { ListeAvanceComponent } from './components/projet/employe/demande/avance/liste-avance/liste-avance.component';
import { ListecongeComponent } from './components/projet/employe/demande/conge/listeconge/listeconge.component';
import { ListeformationComponent } from './components/projet/employe/demande/formation/listeformation/listeformation.component';
import { ListetacheComponent } from './components/projet/employe/tache/listetache/listetache.component';

import { ModifierAvanceComponent } from './components/projet/employe/demande/avance/modifier-avance/modifier-avance.component';
import { ModifierCongeComponent } from './components/projet/employe/demande/conge/modifier-conge/modifier-conge.component';
import { ModifierFormationComponent } from './components/projet/employe/demande/formation/modifier-formation/modifier-formation.component';
import { ModifierTacheComponent } from './components/projet/employe/tache/modifier-tache/modifier-tache.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AjouterPointageComponent } from './components/projet/superviseur/pointage/ajouter-pointage/ajouter-pointage.component';
import { ModifierPointageComponent } from './components/projet/superviseur/pointage/modifier-pointage/modifier-pointage.component';
import { ListepointageComponent } from './components/projet/superviseur/pointage/listepointage/listepointage.component';
import { PointageService } from './services/pointage/pointage.service';
import { EmployeService } from './services/employe/employe.service';
import { AjouterEmployeComponent } from './components/projet/chef-général/gestion-des-employe/ajouter-employe/ajouter-employe.component';
import { ModifierEmployeComponent } from './components/projet/chef-général/gestion-des-employe/modifier-employe/modifier-employe.component';
import { ListeemployeComponent } from './components/projet/chef-général/gestion-des-employe/listeemploye/listeemploye.component';
import { SuperviseurService } from './services/superviseur/superviseur.service';
import { DashboradComponent } from './components/dashborad/dashborad.component';
import { HistoriqueComponent } from './components/projet/chef-général/historique/historique.component';
import { AjouterSuperviseurComponent } from './components/projet/chef-général/gestion-des-superviseur/ajouter-superviseur/ajouter-superviseur.component';
import { ListesuperviseurComponent } from './components/projet/chef-général/gestion-des-superviseur/listesuperviseur/listesuperviseur.component';
import { ModifierSuperviseurComponent } from './components/projet/chef-général/gestion-des-superviseur/modifier-superviseur/modifier-superviseur.component';
import { SignComponent } from './sign/sign.component';
import { HomeChefgeneralComponent } from './components/projet/chef-général/home-chefgeneral/home-chefgeneral.component';
import { HomeEmployeComponent } from './components/projet/employe/home-employe/home-employe.component';
import { HomeSuperviseurComponent } from './components/projet/superviseur/home-superviseur/home-superviseur.component';
import { NavabarempComponent } from './components/projet/employe/navabaremp/navabaremp.component';
import { NavbarsupComponent } from './components/projet/superviseur/navbarsup/navbarsup.component';
import { GetEmployeeComponent } from './components/projet/chef-général/gestion-des-employe/listeemploye/get-employee/get-employee.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
   
    NavbarComponent,
    FooterComponent,
    
   
    
   


    MyProfilComponent,
    Page404Component,
    AjouterAvanceComponent,
    CongeComponent,
    FormationComponent,
    AjoutTacheComponent,
    
    GestionDesAvanceComponent,
    GestionDeCongeComponent,
    GestionDeFormationComponent,
    GestionDesTacheComponent,

    ListeAvanceComponent,
    ListecongeComponent,
    ListeformationComponent,
    ListetacheComponent,

    ModifierAvanceComponent,
    ModifierCongeComponent,
    ModifierFormationComponent,
    ModifierTacheComponent,
 
    SidebarComponent,
 
    AjouterPointageComponent,
    ModifierPointageComponent,
    ListepointageComponent,
 
   AjouterEmployeComponent,
   ModifierEmployeComponent,
   ListeemployeComponent,
   DashboradComponent,
   HistoriqueComponent,
   AjouterSuperviseurComponent,
   ListesuperviseurComponent,
   ModifierSuperviseurComponent,
   SignComponent,
   HomeChefgeneralComponent,
   HomeEmployeComponent,
   HomeSuperviseurComponent,
   NavabarempComponent,
   NavbarsupComponent,
   GetEmployeeComponent,
  
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastNoAnimationModule.forRoot(),
    ChartsModule
  ],
  providers: [
   
    AvanceService,
    CongeService,
    FormationService,
    TacheService,
    PointageService,
    EmployeService,
    SuperviseurService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
