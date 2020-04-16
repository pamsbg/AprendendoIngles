
import { Carro } from "/.Carro";
import { Pessoa } from "/.Pessoa";
import { Concessionaria } from "/.Concessionaria";



// criar carros
let carroA = new Carro("Ford ka", 4)
let carroB = new Carro("Renaul Clio",4)
let carroC = new Carro("Gol", 2)

//mostrar lista de carros
let listaDeCarros: Carro[] - [carroA, carroB,carroC]

let concessionaria = new Concessionaria("Avenida Paulista", listaDeCarros)

//exibir lista de carros
console.log(concessionaria.mostrarListaDeCarros())

//comprar carro
let cliente = new Pessoa("João", "Gol")

concessionaria.mostrarListaDeCarros().map((carro:Carro)=>{
    if(carro['modelo'] == cliente.dizerCarroPreferido())
    {
        cliente.comprarCarror(carro)
    }
    console.log(carro)
}

