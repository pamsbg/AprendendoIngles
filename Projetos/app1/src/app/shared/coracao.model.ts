export class Coracao{
    constructor(
        public Cheio: boolean,
        public urlcoracaocheio : string='/assets/coracao_cheio.png',
        public urlcoracaovazio : string='/assets/coracao_vazio.png'
    ){}
    public exibecoracao():string{
        if(this.Cheio){
            return this.urlcoracaocheio
        }
        else {
            return this.urlcoracaovazio
        }
    }
}