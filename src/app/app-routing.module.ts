import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
// import {FooterComponent} from './footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { QuienesComponent } from './components/quienes/quienes.component';
import { AlianzasComponent } from './components/alianzas/alianzas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { EstrategiasComponent } from './components/estrategias/estrategias.component';
import { BlogComponent } from './components/blog/blog.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' ,  data: { breadcrumb: 'Home'}},
  {path: 'navbar',component: NavBarComponent,children :
    [ {path: 'main',component: MainComponent},
    {path: 'quienes',component: QuienesComponent},
    {path: 'alianzas',component: AlianzasComponent},
    {path: 'servicios',component: ServiciosComponent},
    {path: 'estrategias',component: EstrategiasComponent},
    {path: 'blog',component: BlogComponent},
    {path: 'contacto',component: ContactoComponent},

      
    ]
  },
  {path: 'main',component: MainComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  
  ],
  exports: [RouterModule] ,

  declarations: []
})

export class AppRoutingModule { }
