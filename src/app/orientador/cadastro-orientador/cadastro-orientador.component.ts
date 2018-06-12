import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroupDirective, FormGroup } from '@angular/forms';
import { OrientadorService } from '../service/orientador.service';
import { Orientador } from '../model/orientador.model';
@Component({
  selector: 'app-cadastro-orientador',
  templateUrl: './cadastro-orientador.component.html',
  styleUrls: ['./cadastro-orientador.component.css']
})
export class CadastroOrientadorComponent implements OnInit {

  @ViewChild(FormGroupDirective)
  
  form: FormGroupDirective;
  //2º Passo
  formulario: FormGroup;


    public orientador: Orientador = new Orientador;

  constructor(
    private serviceOrientador: OrientadorService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      matricula: ['', Validators.required],
      nomeCompleto: [''],
      telefone: [null],
      celular: [null],
      email: [null],
      titulacao:[null],
      abordagem: [null],
    }); 
  }

  gravarOrientadord(): void {
    //    this.estagiarioService.gravarEstagiario(this.estagiario)
    //      .subscribe(msg => {
    //        console.log('gravado com sucesso');
    //      });
        console.log(this.formulario.value);
      }

      onSubmit():void{
        this.orientador = {
          ...this.formulario.value
        }
     this.serviceOrientador.gravarOrientador(this.orientador)
      .subscribe( () =>{
        console.log('Gravado com sucesso');
      } , () => {
        console.log('Falhou!');
      });
    }

}
