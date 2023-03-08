import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule // CommonModule = Só será importado nos módulos de funcionalidades
  ],
  exports: [
    CursosComponent
  ] // exports = Indica quais componentes/módulos/diretivas/pipes poderão ser usados por outros modulos
})
export class CursosModule { }
