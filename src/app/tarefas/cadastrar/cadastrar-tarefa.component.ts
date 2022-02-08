import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', {static: true}) formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void{
    if(this.formTarefa.form.valid){
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(["/tarefas"]);
      // router para voltar para outra tela, no caso a atela principal,
      // a tela de listagem.
    }

    /**
     * Se houver erro de validação, não cadastra a tarefa
     */

  }

}
