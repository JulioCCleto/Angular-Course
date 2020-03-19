import { Component, OnInit } from "@angular/core";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-ng-for-segundo',
  templateUrl: './ng-for-segundo.component.html',
  styleUrls: ['./ng-for-segundo.component.css']
})
export class NgForSegundoComponent implements OnInit {
  nome: string = "";
  telefone: string = "";
  endereco: string = "";
  cidade: string = "";
  idade: number = 0;

  cidades = [
    { name: "Belo Horizonte", state: "MG" },
    { name: "Joinville", state: "SC" },
    { name: "Palmas", state: "TO" },
    { name: "Mafra", state: "SC" }
  ];

  clientes = [];

  constructor() {}

  ngOnInit(): void {}

  save() {
    this.clientes.push({
      nome: this.nome,
      endereco: this.endereco,
      telefone: this.telefone,
      cidade: this.cidade,
      idade: this.idade
    });
    console.log(this.clientes);
    this.cancel();
  }

  cancel() {
    this.nome = "";
    this.endereco = "";
    this.telefone = "";
    this.cidade = "";
    this.idade = 0;
  }

  delete(i: number){
    console.log("delete: " + i);
    this.clientes.splice(i);
  }
}
