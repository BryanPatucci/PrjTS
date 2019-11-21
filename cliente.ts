///<reference path="pessoa.ts"/>

    namespace empresa{
        export class Cliente extends Pessoa{
            private _codCliente:Number;
            private _credito:Number;
            private _banco:Banco;

            public getCodCliente(){
                return this._codCliente;
            }

            public setCodCliente(codigo:Number){
                this._codCliente = codigo;
            }

            public getCredito(){
                return this._credito;
            }

            public setCredito(credito:Number){
                this._credito = credito;
            }

            public getBanco(){
                return this._banco;
            }

            public setBanco(banco:Banco){
                this._banco = banco;
            }
        }
    }