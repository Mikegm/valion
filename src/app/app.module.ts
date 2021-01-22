import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainComponent } from './components/main/main.component';
import { QuienesComponent } from './components/quienes/quienes.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlianzasComponent } from './components/alianzas/alianzas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { EstrategiasComponent } from './components/estrategias/estrategias.component';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    QuienesComponent,
    FooterComponent,
    AlianzasComponent,
    ContactoComponent,
    ServiciosComponent,
    EstrategiasComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
      { path: 'main',component: MainComponent},
      { path: 'quienes',component: QuienesComponent},
      {path: 'alianzas',component: AlianzasComponent},
      {path: 'servicios',component: ServiciosComponent},
      {path: 'estrategias',component: EstrategiasComponent},
      {path: 'blog',component: BlogComponent},
      {path: 'contacto',component: ContactoComponent},
    ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
