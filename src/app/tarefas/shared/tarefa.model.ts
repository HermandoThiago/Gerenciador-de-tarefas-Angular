export class Tarefa {

    constructor(
        public id?: number,
        public nome?: string,
        public concluida?: boolean
    ) {}

}

/**
 * O que fazemos aqui, é dizer que o id, nome e concluida serão atributos
 * dentro da classe tarefa.
 * A interrogação diz que os atributos são opcionais.
 */