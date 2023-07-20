import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdministrarLibroComponent } from './administrar-libro/administrar-libro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes=[
  {
    path: '',
    component: HomeComponent
  },{
    path:'administrar',
    component: AdministrarLibroComponent
  },{
    path: 'home',
    redirectTo:'',
    pathMatch: 'full'
  },{
    path:'**',
    component: PageNotFoundComponent
    }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AdministrarLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
