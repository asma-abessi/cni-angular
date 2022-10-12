import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { Page404Component } from './components/page404/page404.component';
import { GestionDesTacheComponent } from './components/projet/superviseur/gestion-des-tache/gestion-des-tache.component';
import { GestionDeFormationComponent } from './components/projet/superviseur/gestion-des-demande/gestion-des-formation/gestion-de-formation.component';
import { GestionDeCongeComponent } from './components/projet/superviseur/gestion-des-demande/gestion-des-conge/gestion-de-conge.component';
import { GestionDesAvanceComponent } from './components/projet/superviseur/gestion-des-demande/gestion-des-avance/gestion-des-avance.component';
import { AjoutTacheComponent } from './components/projet/employe/tache/ajout-tache/ajout-tache.component';
import { FormationComponent } from './components/projet/employe/demande/formation/ajouterformation/formation.component';
import { CongeComponent } from './components/projet/employe/demande/conge/ajouterconge/conge.component';
import { MyProfilComponent } from './components/my-profil/my-profil.component';
import { AjouterAvanceComponent } from './components/projet/employe/demande/avance/ajouter-avance/ajouter-avance.component';
import { ListeAvanceComponent } from './components/projet/employe/demande/avance/liste-avance/liste-avance.component';
import { ListecongeComponent } from './components/projet/employe/demande/conge/listeconge/listeconge.component';
import { ListeformationComponent } from './components/projet/employe/demande/formation/listeformation/listeformation.component';
import { ListetacheComponent } from './components/projet/employe/tache/listetache/listetache.component';
import { ModifierTacheComponent } from './components/projet/employe/tache/modifier-tache/modifier-tache.component';
import { ModifierFormationComponent } from './components/projet/employe/demande/formation/modifier-formation/modifier-formation.component';
import { ModifierAvanceComponent } from './components/projet/employe/demande/avance/modifier-avance/modifier-avance.component';
import { ModifierCongeComponent } from './components/projet/employe/demande/conge/modifier-conge/modifier-conge.component';
import { AjouterPointageComponent } from './components/projet/superviseur/pointage/ajouter-pointage/ajouter-pointage.component';
import { ListepointageComponent } from './components/projet/superviseur/pointage/listepointage/listepointage.component';
import { ModifierPointageComponent } from './components/projet/superviseur/pointage/modifier-pointage/modifier-pointage.component';
import { AjouterEmployeComponent } from './components/projet/chef-général/gestion-des-employe/ajouter-employe/ajouter-employe.component';
import { ModifierEmployeComponent } from './components/projet/chef-général/gestion-des-employe/modifier-employe/modifier-employe.component';
import { ListeemployeComponent } from './components/projet/chef-général/gestion-des-employe/listeemploye/listeemploye.component';
import { DashboradComponent } from './components/dashborad/dashborad.component';
import { HistoriqueComponent } from './components/projet/chef-général/historique/historique.component';
import { ModifierSuperviseurComponent } from './components/projet/chef-général/gestion-des-superviseur/modifier-superviseur/modifier-superviseur.component';
import { ListesuperviseurComponent } from './components/projet/chef-général/gestion-des-superviseur/listesuperviseur/listesuperviseur.component';
import { AjouterSuperviseurComponent } from './components/projet/chef-général/gestion-des-superviseur/ajouter-superviseur/ajouter-superviseur.component';
import { SignComponent } from './sign/sign.component';
import { HomeChefgeneralComponent } from './components/projet/chef-général/home-chefgeneral/home-chefgeneral.component';
import { HomeEmployeComponent } from './components/projet/employe/home-employe/home-employe.component';
import { HomeSuperviseurComponent } from './components/projet/superviseur/home-superviseur/home-superviseur.component';
import { GetEmployeeComponent } from './components/projet/chef-général/gestion-des-employe/listeemploye/get-employee/get-employee.component';



const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  { path: 'dashboard',component:  DashboradComponent},


  {path:'login',component:SignComponent},
  
  {path:'register',component:RegisterComponent},

  {path:'historique',component:HistoriqueComponent},
  
  {path:'profil',component:MyProfilComponent},

  {path:'ajouteravance',component:AjouterAvanceComponent},
  {path:'ajouterconge',component:CongeComponent},
  {path:'ajouterformation',component: FormationComponent},
  {path:'ajoutertache',component:AjoutTacheComponent},

  {path:'gestiondesavance',component:GestionDesAvanceComponent},
  {path:'gestiondesconge',component:GestionDeCongeComponent},
  {path:'gestiondesformation',component:GestionDeFormationComponent},
  {path:'gestiondestache',component:GestionDesTacheComponent},
  {
    path:'sign',
    component:SignComponent
  },


{path:'avance',component:ListeAvanceComponent},
{path:'conge',component:ListecongeComponent},
{path:'formation',component:ListeformationComponent},
{path:'tache',component:ListetacheComponent},




{path:'modifier-avance/:id',component:ModifierAvanceComponent},
{path:'modifier-conge/:id',component:ModifierCongeComponent},
{path:'modifier-formation/:id',component:ModifierFormationComponent},
{path:'modifier-tache/:id',component:ModifierTacheComponent},

{path:'ajouterpointage',component:AjouterPointageComponent},
{path:'pointage',component:ListepointageComponent},
{path:'modifier-pointage/:id',component:ModifierPointageComponent},


{path:'ajouteremploye',
component:AjouterEmployeComponent

},
{path:'employe',component:ListeemployeComponent },
{path:'modifier-employe/:id',component:ModifierEmployeComponent },

{path:'ajoutersuperviseur',component:AjouterSuperviseurComponent },
{path:'superviseur',component:ListesuperviseurComponent },
{path:'modifier-superviseur/:id',component:ModifierSuperviseurComponent },


{path:'homechef',component:HomeChefgeneralComponent },
{path:'homeemploye',component:HomeEmployeComponent},
{path:'homesuperviseur',component:HomeSuperviseurComponent},
{path:'get-employe/:id',component:GetEmployeeComponent},

{path:'**',component:Page404Component},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
