"use strict";
// class Carro 
// {
//     private modelo:string
//     private numeroPortas:number
//     private velocidade:number
//     public acelerar() : void{
//         this.velocidade = this.velocidade + 10
//     }
//     public parar() : void{
//         this.velocidade = 0
//     }
//     public velocidadeAtual() : number{
//         return this.velocidade
//     }
// }
// let carroA = new Carro()
// console.log(carroA)
var Concessionaria = /** @class */ (function () {
    function Concessionaria() {
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostraListadeCarros = function () {
        this.listadecarros;
    };
    return Concessionaria;
}());
var concessionaria = new Concessionaria();
console.log(concessionaria);
