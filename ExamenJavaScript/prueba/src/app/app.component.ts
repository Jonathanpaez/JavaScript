import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  numeroEquiposIngresados=0;

  limpiarNombre=' ';
  limpiarLiga=' ';
  limpiarFecha=' ';
  limpiarCopas=' ';
  limpiarCampeonato=' ';

  equipo1={
    nombreEquipo:"",
    ligaEquipo:"",
    fechaCreacionEquipo:"",
    copasGanadasEquipo:"",
    campeonatoActualEquipo:""
  };
  equipo2={
    nombreEquipo:"",
    ligaEquipo:"",
    fechaCreacionEquipo:"",
    copasGanadasEquipo:"",
    campeonatoActualEquipo:""
  };
  equipo3={
    nombreEquipo:"",
    ligaEquipo:"",
    fechaCreacionEquipo:"",
    copasGanadasEquipo:"",
    campeonatoActualEquipo:""
  };
  equipo4={
    nombreEquipo:"",
    ligaEquipo:"",
    fechaCreacionEquipo:"",
    copasGanadasEquipo:"",
    campeonatoActualEquipo:""
  };
  imagenURL="https://www.wallpaperup.com/uploads/wallpapers/2014/12/30/569737/64393778cfba8f3096cbf403b0dc0ea2.jpg";
  arrayEquipos=[this.equipo1,this.equipo2,this.equipo3,this.equipo4];
  funcionIngresarEquipos(nombre:string,liga:string,creacion:string,copas:string,campeonado:string){
        if(this.numeroEquiposIngresados===0){
          this.equipo1.nombreEquipo=nombre,
            this.equipo1.ligaEquipo=liga,
            this.equipo1.fechaCreacionEquipo=creacion,
            this.equipo1.copasGanadasEquipo=copas,
            this.equipo1.campeonatoActualEquipo=campeonado
          this.imagenURL="http://gamedustria.com/wp-content/uploads/2014/06/dota2.jpg";
          this.oculto1=false

        }if(this.numeroEquiposIngresados===1){
      this.equipo2.nombreEquipo=nombre,
        this.equipo2.ligaEquipo=liga,
        this.equipo2.fechaCreacionEquipo=creacion,
        this.equipo2.copasGanadasEquipo=copas,
        this.equipo2.campeonatoActualEquipo=campeonado
      this.imagenURL="https://www.dccomics.com/sites/default/files/files/character-pops/superman_459Wx300H_589104907a0b05.70849485.png";
      this.oculto2=false
          }if(this.numeroEquiposIngresados===2){
      this.equipo3.nombreEquipo=nombre,
      this.equipo3.ligaEquipo=liga,
        this.equipo3.fechaCreacionEquipo=creacion,
        this.equipo3.copasGanadasEquipo=copas,
        this.equipo3.campeonatoActualEquipo=campeonado
      this.imagenURL="https://www.dccomics.com/sites/default/files/files/character-pops/superman_459Wx300H_589104907a0b05.70849485.png";
      this.oculto3=false
        }if(this.numeroEquiposIngresados===3){
      this.equipo4.nombreEquipo=nombre,
      this.equipo4.ligaEquipo=liga,
        this.equipo4.fechaCreacionEquipo=creacion,
        this.equipo4.copasGanadasEquipo=copas,
        this.equipo4.campeonatoActualEquipo=campeonado
      this.imagenURL="http://www.epn.edu.ec/wp-content/uploads/2016/02/IMG_2650-espacio-de-construcci%C3%B3n-epn-biblitoeca.jpg";
      this.oculto4=false
    }
    console.log("el nombre es :"+this.equipo1.nombreEquipo);
    console.log(liga);
    this.numeroEquiposIngresados=this.numeroEquiposIngresados+1;


  };
  funcionTabla(valor:String){
    if (valor==="1"){
      this.mostrarOculato=false;
      this.mostrarOculato2=true;
      this.mostrarOculato3=true;
      this.mostrarOculato4=true;
    }
    if (valor==="2"){
      this.mostrarOculato=true;
      this.mostrarOculato2=false;
      this.mostrarOculato3=true;
      this.mostrarOculato4=true;
    }
    if (valor==="3"){
      this.mostrarOculato=true;
      this.mostrarOculato2=true;
      this.mostrarOculato3=false;
      this.mostrarOculato4=true;
    }
    if (valor==="4"){
      this.mostrarOculato=true;
      this.mostrarOculato2=true;
      this.mostrarOculato3=true;
      this.mostrarOculato4=false;
    }

  }

  arregloJugadores1 = [
    {
      numeroCamiseta:"",
      nombreCamiseta:"",
      nombreJugador:"",
      poderJugador:"",
      fechaIngresoJugador:"",
      golesJugador:"",
    }
  ];
  contadorjugadorEquipo1=0;

  funcionIngresarJugadorEquipo1(numeroC:string,nombreC:string,nombreJ:string,poderJ:string,fechaI:string,golesJ:string){
    this.arregloJugadores1.push({numeroCamiseta:numeroC,nombreCamiseta:nombreC,nombreJugador:nombreJ,poderJugador:poderJ,fechaIngresoJugador:fechaI,golesJugador:golesJ});
    console.log(numeroC);
  }
  funcionIngresarJugadorEquipo10(numeroC:string,nombreC:string,nombreJ:string,poderJ:string,fechaI:string,golesJ:string){
    this.jugador1.numeroCamiseta=numeroC;
    this.jugador1.nombreCamiseta=nombreC;
    this.jugador1.nombreJugador=nombreJ;
    this.jugador1.poderJugador=poderJ;
    this.jugador1.fechaIngresoJugador=fechaI;
    this.jugador1.golesJugador=golesJ;
  }
  jugador1={
    numeroCamiseta:"",
    nombreCamiseta:"",
    nombreJugador:"",
    poderJugador:"",
    fechaIngresoJugador:"",
    golesJugador:"",
  };




  oculto1=true;
  oculto2=true;
  oculto3=true;
  oculto4=true;
  mostrarOculato=true;
  mostrarOculato2=true;
  mostrarOculato3=true;
  mostrarOculato4=true;

  funcionLimpiar(){
    this.limpiarCampeonato='  ';
    this.limpiarCopas='  ';
    this.limpiarFecha='  ';
    this.limpiarLiga='  ';
    this.limpiarNombre='  ';
  }





}
