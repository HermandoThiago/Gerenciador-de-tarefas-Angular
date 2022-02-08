import { Routes } from "@angular/router";
import { CadastrarTarefaComponent } from ".";
import { ListarTarefaComponent } from "./listar";
import { EditarTarefaComponent } from "./editar";

export const TarefasRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar' // redireciona para tarefas/listar
    },
    {
        path: 'tarefas/listar', // => bloco url, redireciona para o component abaixo
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    },
    {
        path: 'tarefas/editar/:id',
        component: EditarTarefaComponent
    }
];