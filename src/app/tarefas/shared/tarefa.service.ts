import { Injectable } from '@angular/core';
import { Tarefa } from '.';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[] { // retorna um array de tarefas
    const tarefas = localStorage['tarefas']; // acessa o localStorage
    return tarefas ? JSON.parse(tarefas) : [];

    /**
     * ? => operador ternário
     * retorna a seguinte expressão => se existe tarefas no JSON, retorne as tarefas
     * caso contrário, retorna um array vazio
     */

  }

  cadastrar(tarefa: Tarefa): void{ // não precisa de retorno

    const tarefas = this.listarTodos(); // Chama a função ListarTodos
    tarefa.id = new Date().getTime(); // Precisamos gerar um id de alguma forma, usamos o getTime para 
                                      // pegar os segundos de uma data ate a data atual, usando esse valor como ID
    tarefas.push(tarefa); // inserindo inserindo a tarefa no final da lista tarefas
    localStorage['tarefas'] = JSON.stringify(tarefas); // converte a tarefa para string e adiciona no local storage

  }

  buscarPorID(id: number): Tarefa{

    const tarefas: Tarefa[] = this.listarTodos(); // chamamos listar todos, para obter as tarefas
    return tarefas.find(tarefa => tarefa.id === id) // Para cada tarefa faz um teste, caso retorne true, retorna a tarefa

  }

  atualizar(tarefa: Tarefa): void{

    const tarefas: Tarefa[] = this.listarTodos(); // chamamos a função lista todos
    tarefas.forEach((obj, index, objs) => {

      if(tarefa.id === obj.id){
        objs[index] = tarefa
      }

      /**
       * O for each verifica três parâmetros:
       * obj = a tarefa em si
       * index = a posição da tarefa
       * objs = a lista das tarefas
       */

    });

    localStorage['tarefas'] = JSON.stringify(tarefas)

  }

  remover(id: number): void{

    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    /**
     * Filtra todas as tarefas com o id diferente da que queremos remover
     */ 
    localStorage['tarefas'] = JSON.stringify(tarefas);

  }

  alterarStatus(id: number): void{

    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if(id === obj.id){
        objs[index].concluida = !obj.concluida;
        /**
         * pego o atributo concluido, depois pego o inverso valor boolean do concluida
         * se tornando false, o que faz com que fique como 'desconcluido'
         */
      }
    });

    localStorage['tarefas'] = JSON.stringify(tarefas);

  }

}
