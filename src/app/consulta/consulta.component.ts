import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  displayedColumns: string[] = ['nome'];
  dataSource: Usuario[];
  selectedUserId: number;
  usuario: any;
  userId: number;
  constructor(private router: Router, private route: ActivatedRoute, private ApiConsulta: ApiService) { }

  ngOnInit() {
    this.ApiConsulta.getUsuarios()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);

    }, err => {
      console.log(err);

    });
  }

  getUsuario(id) {
    id != null ?
    this.ApiConsulta.getUsuario(id)
      .subscribe(data => {
        this.usuario = data === null ? 'Numero Inválido' : data;
        console.log(this.usuario);
      }) : this.usuario = 'Digite um valor de 1 a 3';
  }

}
