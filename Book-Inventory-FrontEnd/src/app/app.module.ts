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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
/**
 * Configuración de las rutas de navegación para la aplicación Angular.
 * Cada ruta se asocia a un componente específico que se carga cuando la URL coincide con el 'path'.
 */
const routes: Routes=[
  {
    path: '',
    component: HomeComponent
    /* 
     * Descripción: Esta ruta se carga cuando el usuario accede a la URL raíz del sitio.
     */
  },{
    path:'administrar',
    component: AdministrarLibroComponent
    /* 
     * Descripción: Esta ruta se carga cuando el usuario accede a la 
     * URL 'http://localhost:4200/administrar'. Muestra la vista de administración de libros.
     */
  },{
    path: 'home',
    redirectTo:'',
    pathMatch: 'full'
   /* 
    * Descripción: Esta ruta se utiliza para redirigir al usuario de la
    * URL 'http://localhost:4200/home' a la URL raíz 'http://localhost:4200/'.
    * Es una redirección de coincidencia exacta, cualquier otra parte en la 
    * URL después de '/home' no es considerada.
    */

  },{
    path:'**',
    component: PageNotFoundComponent
   /* 
    * Descripción: Esta ruta se carga cuando el usuario accede a una URL 
    * que no coincide con ninguna de las rutas anteriores.
    * Muestra una página de error 404 o una página indicando que la ruta no se encuentra.
    */
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
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() ,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
