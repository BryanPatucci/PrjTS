namespace empresa{
    export abstract class Pessoa{
        private _nome:String;
        private _idade:Number;
        private _cpf:String;

        public getNome(){
            return this._nome;
        }

        public setNome(nome:String){
            this._nome = nome;
        }

        public getIdade(){
            return this._idade;
        }

        public setIdade(idade:Number){
            this._idade = idade;
        }

        public getCpf(){
            return this._cpf;
        }

        public setCpf(cpf:String){
            this._cpf = cpf;
        }
    }
}