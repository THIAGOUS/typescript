import Carro from './Carro' // usa dessa forma quando for exportação default
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

//import { Concessionaria} from './Concessionaria' usa dessa forma quando não utilizar o default na exportação

/* --- Criar Carros --- */
let carroA = new Carro("DodGe Jouney",4)
let carroB = new Carro("Veloster",3)
let carroC = new Carro("Cerato",4)

/* --- Montar a Lista de Carros da Concessionária --- */
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]
//let listaDeCarros: Carro[] = [carroA, carroB, carroC] Pode se usar dessa forma também.

let concessionaria = new Concessionaria('Av. Paulista',listaDeCarros)

/* --- Exibir a lista de Carros --- */
//console.log(concessionaria.mostrarListaDeCarros())

/* --- Comprar o Carro --- */
let cliente = new Pessoa('João','Veloster')

concessionaria.mostrarListaDeCarros().map((carro: Carro) =>{
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        //compra o carro
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())