import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.scss']
})
export class CalculoComponent implements OnInit {
  valorPretendido: number;
  numeroParcelas: number;
  valorTotal: number;
  constructor(private ApiConsulta: ApiService) { }

  ngOnInit() {
  }

  getValor(valorPretendido, numeroParcelas) {
    this.ApiConsulta.getValor(valorPretendido, numeroParcelas)
      .subscribe(data => {
        this.valorTotal = data;
        console.log(this.valorTotal);
      });
  }

}
