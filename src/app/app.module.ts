import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListaEstagiarioComponent } from './estagiario/lista-estagiario/lista-estagiario.component';
import { CadastroEstagiarioComponent } from './estagiario/cadastro-estagiario/cadastro-estagiario.component';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { EstagiarioService } from './estagiario/service/estagiario.service';
import { HttpClient, HttpHandler  } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { TableEstagiarioComponent } from './estagiario/menu-estagiario/menu-estagiario.component';
import { TableOrientadorComponent } from './orientador/menu-orientador/menu-orientador.component';
import { ListaOrientadorComponent } from './orientador/lista-orientador/lista-orientador.component';
import { CadastroOrientadorComponent } from './orientador/cadastro-orientador/cadastro-orientador.component';
import { OrientadorService } from './orientador/service/orientador.service';
import { VincularComponent } from './orientador/vincular/vincular.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaEstagiarioComponent,
    CadastroEstagiarioComponent,
    TableEstagiarioComponent,
    TableOrientadorComponent,
    ListaOrientadorComponent,
    CadastroOrientadorComponent,
    VincularComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EstagiarioService, HttpClient, OrientadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
