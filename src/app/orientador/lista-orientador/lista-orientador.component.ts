import { Component, OnInit } from '@angular/core';
import { Orientador } from '../model/orientador.model';
import { OrientadorService } from '../service/orientador.service';

@Component({
  selector: 'app-lista-orientador',
  templateUrl: './lista-orientador.component.html',
  styleUrls: ['./lista-orientador.component.css']
})
export class ListaOrientadorComponent implements OnInit {

  public orientadores :Orientador [];
  
  constructor(
    private  orientadorService: OrientadorService
  ) { }

  ngOnInit() {
    this.orientadorService.getListaOrientador().subscribe((orientadorServices) => {
      this.orientadores = orientadorServices;
      console.log('Sucesso!');
    },() => {
      console.log('Erro!');
    })
  }


}
