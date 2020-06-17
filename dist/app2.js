"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro")); // usa dessa forma quando for exportação default
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
//import { Concessionaria} from './Concessionaria' usa dessa forma quando não utilizar o default na exportação
/* --- Criar Carros --- */
var carroA = new Carro_1.default("DodGe Jouney", 4);
var carroB = new Carro_1.default("Veloster", 3);
var carroC = new Carro_1.default("Cerato", 4);
/* --- Montar a Lista de Carros da Concessionária --- */
var listaDeCarros = [carroA, carroB, carroC];
//let listaDeCarros: Carro[] = [carroA, carroB, carroC] Pode se usar dessa forma também.
var concessionaria = new Concessionaria_1.default('Av. Paulista', listaDeCarros);
/* --- Exibir a lista de Carros --- */
//console.log(concessionaria.mostrarListaDeCarros())
/* --- Comprar o Carro --- */
var cliente = new Pessoa_1.default('João', 'Veloster');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //compra o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
