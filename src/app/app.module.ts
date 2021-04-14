import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainComponent } from './components/main/main.component';
import { QuienesComponent } from './components/quienes/quienes.component';
import { CompromisoComponent } from './components/quienes/compromiso/compromiso.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlianzasComponent } from './components/alianzas/alianzas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { EstrategiasComponent } from './components/estrategias/estrategias.component';
import { BlogComponent } from './components/blog/blog.component';
import { BasesComponent } from './components/quienes/bases/bases.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { VideoLlamadaComponent } from './components/footer/video-llamada/video-llamada.component';
import { LoginComponent } from './components/login/login.component';
import { PostComponent } from './components/blog/post/post.component';
import { ViewpostComponent } from './components/blog/viewpost/viewpost.component';


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
    BlogComponent,
    CompromisoComponent,
    BasesComponent,
    CarouselComponent,
    VideoLlamadaComponent,
    LoginComponent,
    PostComponent,
    ViewpostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
      { path: 'main',component: MainComponent},
      { path: 'quienes',component: QuienesComponent},
        // children :[ 
        //   {
        //     path: 'compromiso',component: CompromisoComponent
        //   }
        // ]
      
      { path: 'compromiso',component: CompromisoComponent},
      { path: 'bases',component: BasesComponent},
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
