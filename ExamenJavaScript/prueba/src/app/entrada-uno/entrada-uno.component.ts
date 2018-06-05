import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada-uno',
  templateUrl: './entrada-uno.component.html',
  styleUrls: ['./entrada-uno.component.css']
})
export class EntradaUnoComponent implements OnInit {
  nombre='';
  liga='';
  fecha='';
  numero='';
  campeonato='';
  constructor() { }

  ngOnInit() {
  }


  funcionLimpiar(){
    this.nombre='    ';
    this.liga='     ';
    this.fecha='    ';
    this.numero='    ';
    this.campeonato='    ';
}

}
