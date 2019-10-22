import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculoComponent } from './calculo/calculo.component';
import { ConsultaComponent } from './consulta/consulta.component';

const routes: Routes = [
  {
    path: 'calculo',
    component: CalculoComponent,
    data: { title: 'Realizar Cálculo'}
  },
  {
    path: 'consultaUsuario',
    component: ConsultaComponent,
    data: { title: 'Consultar Usuário' }
  },
  {
    path: 'consultaUsuario/:id',
    component: ConsultaComponent,
    data: { title: 'Consultar Usuário' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
