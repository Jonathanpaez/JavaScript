import { Component, OnInit,
  Output, EventEmitter,
  Input } from '@angular/core';
import {EntradaUno} from "../entradaUno";

@Component({
  selector: 'app-entrada-uno',
  templateUrl: './entrada-uno.component.html',
  styleUrls: ['./entrada-uno.component.css']
})
export class EntradaUnoComponent implements OnInit {
  model = new EntradaUno("Equipo1",
    "Liga1",
    new Date(),
    0,
    false);

  @Output() emitEvent:EventEmitter<{}> = new EventEmitter<{}>();

  @Input() nombre1;

  //Variables
  nombre:string = "";
  liga:string = "";
  fechaCreacion:Date;
  numCopasInter:number = 0;
  campeonActual:boolean = false;

  constructor() {

  }


  ngOnInit() {
    this.function1();
  }
  public function1(){
    console.log("Dato: ", EntradaUno);
    let fResponse = {
      nombre: this.model.nombre,
      liga: this.model.liga,
      fechaCreacion: this.model.fechaCreacion,
      numCopasInter: this.model.numCopasInter,
      campeonActual: this.model.campeonActual
    };
  }

  onSubmit() { this.nombre = this.model.nombre; }
}
