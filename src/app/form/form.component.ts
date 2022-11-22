import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SheetService } from '../service/sheet.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  inscrito = new Inscrito();
  error: boolean = false;
  carregando: boolean = false;
  errorMessage: any;
  celulas: any;
  nome?: String;
  idInscrito: number = 0;
  enviado: boolean = false;
  faseInscrito: boolean = true;
  faseGrupos: boolean = false;
  faseOitavas: boolean = false;
  faseQuartas: boolean = false;
  faseSemifinais: boolean = false;
  faseFinais: boolean = false;
  grupos: any[] = [];
  oitavas: any[] = [];
  quartas: any[] = [];
  semis: any[] = [];
  final: any[] = [];
  terceiroLugar: any[] = [];

  constructor(private sheetService: SheetService) {}

  ngOnInit(): void {
    this.carregando = true;
    this.celulas = [
      'Dimas',
      'Hesed',
      'Klêtos',
      'Servos do Rei',
      'Siga-me',
      'Yous',
      'Malak',
      'Ekballo',
      'Farol',
      'Emaús',
      'Refúgio',
      'Malak',
    ];

    this.grupos = this.preencherGrupos();
    this.carregando = false;
  }

  verificaInscricao() {
    this.carregando = true;
    if (this.inscrito.nome?.length == 0 || this.inscrito.nome == null) {
      this.errorMessage = 'O nome não pode ficar em branco!';
      this.error = true;
      return;
    }

    if (this.inscrito.celula?.length == 0 || this.inscrito.celula == null) {
      this.errorMessage = 'A célula não pode ficar em branco!';
      this.error = true;
      return;
    }

    this.faseGrupos = true;
    this.faseInscrito = false;
    this.carregando = false;
  }

  preencherOitavas() {
    this.carregando = true;

    console.table(this.grupos);

    if (this.grupos.some((i) => i.primeiro == null || i.segundo == null)) {
      this.error = true;
      this.errorMessage = 'É preciso selecionar os times';
      return;
    }

    if (this.grupos.some((i) => i.primeiro == i.segundo)) {
      this.error = true;
      this.errorMessage =
        'Não pode selecionar o mesmo time nas duas posições !';
      return;
    }

    // Grupo A
    let a1 = this.grupos[0].primeiro;
    let a2 = this.grupos[0].segundo;
    // Grupo B
    let b1 = this.grupos[1].primeiro;
    let b2 = this.grupos[1].segundo;
    // Grupo C
    let c1 = this.grupos[2].primeiro;
    let c2 = this.grupos[2].segundo;
    // Grupo D
    let d1 = this.grupos[3].primeiro;
    let d2 = this.grupos[3].segundo;
    // Grupo E
    let e1 = this.grupos[4].primeiro;
    let e2 = this.grupos[4].segundo;
    // Grupo F
    let f1 = this.grupos[5].primeiro;
    let f2 = this.grupos[5].segundo;
    // Grupo G
    let g1 = this.grupos[6].primeiro;
    let g2 = this.grupos[6].segundo;
    // Grupo H
    let h1 = this.grupos[7].primeiro;
    let h2 = this.grupos[7].segundo;

    let oitavas = [
      {
        jogo: 'Oitavas 1',
        time1: a1,
        time2: b2,
        vencedor: null,
      },
      {
        jogo: 'Oitavas 2',
        time1: c1,
        time2: d2,
        vencedor: null,
      },
      {
        jogo: 'Oitavas 3',
        time1: e1,
        time2: f2,
        vencedor: null,
      },
      {
        jogo: 'Oitavas 4',
        time1: g1,
        time2: h2,
        vencedor: null,
      },
      {
        jogo: 'Oitavas 5',
        time1: b1,
        time2: a2,
        vencedor: null,
      },
      {
        jogo: 'Oitavas 6',
        time1: d1,
        time2: c2,
        vencedor: null,
      },
      {
        jogo: 'Oitavas 7',
        time1: f1,
        time2: e2,
        vencedor: null,
      },
      {
        jogo: 'Oitavas 8',
        time1: h1,
        time2: g2,
        vencedor: null,
      },
    ];

    this.oitavas = oitavas;
    this.faseGrupos = false;
    this.faseOitavas = true;
    this.carregando = false;

    return oitavas;
  }

  preencherQuartas() {
    this.carregando = true;

    console.table(this.oitavas);

    if (this.oitavas.some((i) => i.vencedor == null)) {
      this.error = true;
      this.errorMessage = 'É preciso selecionar os times';
      this.carregando = false;
      return;
    }

    // Jogo 1
    let vencedorJogo1 = this.oitavas[0].vencedor;
    // Jogo 2
    let vencedorJogo2 = this.oitavas[1].vencedor;
    // Jogo 3
    let vencedorJogo3 = this.oitavas[2].vencedor;
    // Jogo 4
    let vencedorJogo4 = this.oitavas[3].vencedor;
    // Jogo 5
    let vencedorJogo5 = this.oitavas[4].vencedor;
    // Jogo 6
    let vencedorJogo6 = this.oitavas[5].vencedor;
    // Jogo 7
    let vencedorJogo7 = this.oitavas[6].vencedor;
    // Jogo 8
    let vencedorJogo8 = this.oitavas[7].vencedor;

    let quartas = [
      {
        jogo: 'Quartas 1',
        time1: vencedorJogo1,
        time2: vencedorJogo2,
        vencedor: null,
      },
      {
        jogo: 'Quartas 2',
        time1: vencedorJogo3,
        time2: vencedorJogo4,
        vencedor: null,
      },
      {
        jogo: 'Quartas 3',
        time1: vencedorJogo5,
        time2: vencedorJogo6,
        vencedor: null,
      },
      {
        jogo: 'Quartas 4',
        time1: vencedorJogo7,
        time2: vencedorJogo8,
        vencedor: null,
      },
    ];

    this.quartas = quartas;
    this.faseOitavas = false;
    this.faseQuartas = true;
    this.carregando = false;

    return quartas;
  }

  preencherSemis() {
    this.carregando = true;

    console.table(this.quartas);

    if (this.quartas.some((i) => i.vencedor == null)) {
      this.error = true;
      this.errorMessage = 'É preciso selecionar os times';
      this.carregando = false;
      return;
    }

    // Jogo 1
    let vencedorJogo1 = this.quartas[0].vencedor;
    // Jogo 2
    let vencedorJogo2 = this.quartas[1].vencedor;
    // Jogo 3
    let vencedorJogo3 = this.quartas[2].vencedor;
    // Jogo 4
    let vencedorJogo4 = this.quartas[3].vencedor;

    let semis = [
      {
        jogo: 'Semifinal 1',
        time1: vencedorJogo1,
        time2: vencedorJogo2,
        vencedor: null,
        perdedor: null,
      },
      {
        jogo: 'Semifinal 2',
        time1: vencedorJogo3,
        time2: vencedorJogo4,
        vencedor: null,
        perdedor: null,
      },
    ];

    this.semis = semis;
    this.faseQuartas = false;
    this.faseSemifinais = true;
    this.carregando = false;

    return semis;
  }

  preencherFinal() {
    this.carregando = true;

    this.semis[0].perdedor =
      this.semis[0].vencedor == this.semis[0].time1
        ? this.semis[0].time2
        : this.semis[0].time1;
    this.semis[1].perdedor =
      this.semis[1].vencedor == this.semis[1].time1
        ? this.semis[1].time2
        : this.semis[1].time1;

    console.table(this.semis);

    if (this.semis.some((i) => i.vencedor == null)) {
      this.error = true;
      this.errorMessage = 'É preciso selecionar os times';
      this.carregando = false;
      return;
    }

    // Jogo 1
    let vencedorJogo1 = this.semis[0].vencedor;
    let perdedorJogo1 = this.semis[0].perdedor;
    // Jogo 2
    let vencedorJogo2 = this.semis[1].vencedor;
    let perdedorJogo2 = this.semis[1].perdedor;

    let final = [
      {
        time1: vencedorJogo1,
        time2: vencedorJogo2,
        vencedor: null,
        segundoLugar: null,
      },
    ];

    this.final = final;
    this.faseSemifinais = false;
    this.faseFinais = true;

    let terceiroLugar = [
      {
        time1: perdedorJogo1,
        time2: perdedorJogo2,
        vencedor: null,
      },
    ];

    this.terceiroLugar = terceiroLugar;

    this.carregando = false;

    return final;
  }

  finalizarBolao() {
    if (this.final.some((i) => i.vencedor == null)) {
      this.error = true;
      this.errorMessage = 'É preciso selecionar os times';
      this.carregando = false;
      return;
    }

    if (this.terceiroLugar.some((i) => i.vencedor == null)) {
      this.error = true;
      this.errorMessage = 'É preciso selecionar os times';
      this.carregando = false;
      return;
    }

    this.carregando = true;

    this.final[0].segundoLugar =
      this.final[0].vencedor == this.final[0].time1
        ? this.final[0].time2
        : this.final[0].time1;

    console.table(this.final);
    console.table(this.terceiroLugar);

    // Oitavas
    for (let i = 0; i < this.oitavas.length; i++) {
      const element = this.oitavas[i];
      var oitava = element.time1 + ' X ' + element.time2 + ' (' + element.vencedor + ') ';
      this.inscrito.oitavas += oitava;
    }

    // Quartas
    for (let i = 0; i < this.quartas.length; i++) {
      const element = this.quartas[i];
      var quarta = element.time1 + ' X ' + element.time2 + ' (' + element.vencedor + ') ';
      this.inscrito.quartas += quarta;
    }

    // Semi
    for (let i = 0; i < this.semis.length; i++) {
      const element = this.semis[i];
      var semi = element.time1 + ' X ' + element.time2 + ' (' + element.vencedor + ') ';
      this.inscrito.semis += semi;
    }

    // Final
    for (let i = 0; i < this.final.length; i++) {
      const element = this.final[i];
      var final = element.time1 + ' X ' + element.time2 + ' (' + element.vencedor + ')';
      this.inscrito.final += final;
      this.inscrito.vencedores = '1°: ' + element.vencedor + ' 2°: ' + element.segundoLugar + ' 3°: ' + this.terceiroLugar[0].vencedor;
    }

    this.sheetService.getInscritoByNome(this.inscrito.nome).subscribe({
      next: (response) => {
        let existeInscrito = response.length > 0;

        if (!existeInscrito) {
          this.sheetService.getUltimoId().subscribe({
            next: (response) => {
              this.idInscrito = response[0].id;

              if (this.idInscrito != 0) {
                this.sheetService
                  .saveItem(this.idInscrito, this.inscrito)
                  .subscribe({
                    next: () => {
                      this.inscrito = new Inscrito();
                      this.enviado = true;
                      this.carregando = false;
                      console.table(this.inscrito);
                    },
                    error: (error: HttpErrorResponse) => {
                      this.error = true;
                      this.errorMessage = 'Erro: ' + error.message;
                      this.carregando = false;
                    },
                  });
              }
            },
            error: (error: HttpErrorResponse) => {
              this.error = true;
              this.errorMessage = 'Erro: ' + error.message;
              this.carregando = false;
            },
          });
        } else {
          this.error = true;
          this.errorMessage = 'Já existe uma inscrição com este nome!';
          this.carregando = false;
        }
      },
      error: (error: HttpErrorResponse) => {
        this.error = true;
        this.errorMessage = 'Erro: ' + error.message;
        this.carregando = false;
      },
    });
  }

  preencherGrupos() {
    return [
      {
        titulo: 'Grupo A',
        selecoes: ['Catar', 'Equador', 'Senegal', 'Holanda'],
        primeiro: null,
        segundo: null,
      },
      {
        titulo: 'Grupo B',
        selecoes: ['Inglaterra', 'Irã', 'Estados Unidos', 'País de Gales'],
        primeiro: null,
        segundo: null,
      },
      {
        titulo: 'Grupo C',
        selecoes: ['Argentina', 'Arábia Saudita', 'México', 'Polônia'],
        primeiro: null,
        segundo: null,
      },
      {
        titulo: 'Grupo D',
        selecoes: ['França', 'Austrália', 'Dinamarca', 'Tunísia'],
        primeiro: null,
        segundo: null,
      },
      {
        titulo: 'Grupo E',
        selecoes: ['Espanha', 'Costa Rica', 'Alemanha', 'Japão'],
        primeiro: null,
        segundo: null,
      },
      {
        titulo: 'Grupo F',
        selecoes: ['Bélgica', 'Canadá', 'Marrocos', 'Croácia'],
        primeiro: null,
        segundo: null,
      },
      {
        titulo: 'Grupo G',
        selecoes: ['Brasil', 'Sérvia', 'Suíça', 'Camarões'],
        primeiro: null,
        segundo: null,
      },
      {
        titulo: 'Grupo H',
        selecoes: ['Portugal', 'Gana', 'Uruguai', 'Coreia do Sul'],
        primeiro: null,
        segundo: null,
      },
    ];
  }
}

export class Inscrito {
  id?: number;
  nome?: String;
  celula?: String;
  oitavas?: String = '';
  quartas?: String = '';
  semis?: String = '';
  final?: String = '';
  vencedores?: String;
}
