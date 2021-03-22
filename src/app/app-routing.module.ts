import { AuthGuardGuard } from './auth-guard.guard';
import { ViewProductComponent } from './view-product/view-product.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  { path:"home" , children:[
    {path: "" , component: HomeComponent},
    {path:":id" , component: ViewProductComponent},
    
  ] }, 
  {path:"back" , component:HomeComponent}, 
  {path:"moviesList" , component:MovieListComponent},
  { path:"card" , component:CardComponent , canActivate : [AuthGuardGuard]},
  
  { path:"favourites" , component: FavouritesComponent},
  {path:"login" ,
  children: [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  ],
  },
  {path:"register",
  children: [
    { path: '', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
  ],
  },
  {path:"**" , component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
