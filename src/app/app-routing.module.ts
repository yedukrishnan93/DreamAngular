import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AboutComponent } from './pages/about/about.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';

const routes: Routes = [{path:"",component:WelcomeComponent},
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"about",component:AboutComponent},
{path:"userHome",component:UserHomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
