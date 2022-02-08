import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { TarefasRoutes } from "./tarefas";

export const routes: Routes = [
    {
        path: '', // A tela inicial tbm redireciona para ./tarefas/listar
        redirectTo: '/tarefas/listar',
        pathMatch: 'full'
    },
    ...TarefasRoutes
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], // forRoot é usado para garantir que o padrão de rotas seja único
    exports: [RouterModule]
})

export class AppRoutingModule {}