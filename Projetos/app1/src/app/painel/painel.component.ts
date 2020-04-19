import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import {Frase} from '../shared/frase.model'
import {FRASES} from './frases-mock'


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {
public frases: Frase[]= FRASES
public instrucao:string = 'Traduza a frase'
public resposta:string=""

public rodada: number =Math.round(((Math.random() *60) + 1))
public contador: number = 0
public rodadaFrase: Frase
public progresso :number =0
public tentativas : number=3

@Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada()
    
    console.log(this.rodadaFrase) }

  ngOnInit(): void {
  }
 ngOnDestroy(){

 }
 public atualizaResposta(resposta: Event): void{
   this.resposta = ((<HTMLInputElement> resposta.target).value)
  // console.log(this.resposta)
 }
 public verificarResposta():void {

   if(this.rodadaFrase.frasePtBr == this.resposta){
     
     //atualiza rodada
     this.rodada++
     this.contador++
     console.log(this.contador)
     if (this.contador==4){
       this.encerrarJogo.emit('vitória')
       
       
     }
     //atualiza progresso
     this.progresso = this.progresso + (100/4)
     //atualiza frase da rodada
     
     this.atualizaRodada()

     
     
   }
   else{
    this.atualizaRodada()
     //diminui tentativas
     this.tentativas--
     if(this.tentativas===-1){
       this.encerrarJogo.emit('derrota')
       
     }
   }

  
   console.log(this.frases[this.rodada])
 }

 public atualizaRodada():void{
  this.rodadaFrase = this.frases[this.rodada]
  //limpa a resposta
  this.resposta =""
 }
 
}
