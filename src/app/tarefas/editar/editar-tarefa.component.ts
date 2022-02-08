import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa, TarefaService } from '..';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', {static: true}) formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    /**
     * O +converte o valor de string para numerico
     * pegando o id no params
     */
    this.tarefa = this.tarefaService.buscarPorID(id);
  }

  atualizar(): void{

    if(this.formTarefa.form.valid){
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }

  }

}
