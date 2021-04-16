import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
// import {FooterComponent} from './footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { QuienesComponent } from './components/quienes/quienes.component';
import { CompromisoComponent } from './components/quienes/compromiso/compromiso.component';
import { AlianzasComponent } from './components/alianzas/alianzas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { EstrategiasComponent } from './components/estrategias/estrategias.component';
import { BlogComponent } from './components/blog/blog.component';
import { BasesComponent } from './components/quienes/bases/bases.component';

import { from } from 'rxjs';

const routes: Routes = [
  {path: '', component: MainComponent},
  // { path: '', redirectTo: '', pathMatch: 'full' ,  data: { breadcrumb: 'Home'}},
  {path: 'navbar',component: NavBarComponent,children :
    [ {path: '',component: MainComponent},
   
    {path: 'alianzas',component: AlianzasComponent},
    {path: 'servicios',component: ServiciosComponent},
    {path: 'estrategias',component: EstrategiasComponent},
    {path: 'blog',component: BlogComponent},
    {path: 'contacto',component: ContactoComponent},

    ]
  },
  {path: 'quienes',component: QuienesComponent,
  // children :[ 
  //     {
  //       path: 'compromiso',
  //       component: CompromisoComponent
  //     }
  //   ]
  },
  { path: 'compromiso',component: CompromisoComponent},
  { path: 'bases',component: BasesComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  
  ],
  exports: [RouterModule] ,

  declarations: []
})

export class AppRoutingModule { }
