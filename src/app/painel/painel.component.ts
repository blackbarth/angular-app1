import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;
  public tentativas: number = 3;

  constructor() {
    this.atualizaRodada();
    console.log(this.rodadaFrase);
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {

    if (this.rodadaFrase.frasePtBr.toUpperCase() == this.resposta.toUpperCase()) {
      alert('A tradução esta correta');
      this.rodada++;
      if (this.rodada === this.frases.length) {
        alert('Concluiu as traduçoes com sucesso!!!')
      }

      this.atualizaRodada();
      this.progresso = this.progresso + (100 / this.frases.length);
      console.log('Porcentagem: ', this.progresso)
      console.log(this.rodadaFrase);

    } else {
      this.tentativas--;

      if (this.tentativas === -1) {
        alert('Esgotou todas suas vidas!!')
      }
      alert('A tradução esta errada');
    }



    console.log('Verificar resposta: ', this.resposta);
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }

}
