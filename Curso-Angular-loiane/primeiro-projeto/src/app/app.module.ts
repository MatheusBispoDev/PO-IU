import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component'; // Importação de um componente externo
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component, // Declarando que um componente externo será usado em outro componente
  ], // declarations = Os componentes que serão usados
  imports: [
    BrowserModule, // BrowserModule = Só será importado no módulo raiz
    AppRoutingModule,
    CursosModule,
  ], // imports = Os módulos que serão usados
  providers: [], // providers = Os serviços que serão usados
  bootstrap: [AppComponent] // bootstrap = Qual o componente que será instanciado no momento da execução da aplicação (será apenas no módulo raiz)
})
export class AppModule { }
