import { Component } from '@angular/core';
import { Persona } from './persona';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CALCULADORA IMC';
  titlee = ''
  historicotitle = 'Historial de Personas'
  public nuevoNom?: string;
  public sexo?: boolean;
  public altura?: number = 0;
  public peso?: number = 0;
  public imc?: number = 0;
  public personas: Persona[] = [
    // { texto: 'Tarea 1' },
    // { texto: 'Tarea 2' },
    // { texto: 'Tarea 3' },
    // { texto: 'gilipollas', sexo: false, altura: 0, peso:0}
  ];


  public sumaAltura() {
    this.altura++;
  }
  public restaAltura() {
    if (this.altura > 0) {
      this.altura--
    } else {
      alert('Error XOXO')
    };
  }

  public sumaPeso() {
    this.peso++;
  }

  public restaPeso() {
    if (this.peso > 0) {
      this.peso--
    } else {
      alert('Error XOXO')

    };
  }



  public addPersona(): void {
    // if(empty(this.nuevaTarea)) {}
    if (!this.nuevoNom) {
      return;
    }

    // this.personas.push({
    //   texto: this.nuevoNom,
    //   sexo: this.sexo,
    //   altura: this.altura,
    //   peso: this.peso
    // });

    this.nuevoNom = "";
  }

  public reset() {
    this.peso = 0;
    this.altura = 0;
    this.nuevoNom = "";

  }

  public send() {

    this.imc = this.peso / Math.pow(this.altura / 100, 2);

    
    if(this.sexo=true){
      if (this.imc < 20) {
        this.titlee = this.nuevoNom + ' te falta algún BOCADILLO'
      }else if(this.imc >= 20 && this.imc <= 25){
        this.titlee = this.nuevoNom + ' estás SANO'
      }else if(this.imc > 25){
        this.titlee = this.nuevoNom + ' estás GORDO'
      }
    }
    
    if(this.sexo=false){
      if (this.imc < 18) {
        this.titlee = this.nuevoNom + ' te falta algún BOCADILLO'
      }else if(this.imc >= 18 && this.imc <= 25){
        this.titlee = this.nuevoNom + ' estás SANA'
      }else if(this.imc > 25){
        this.titlee = this.nuevoNom + ' estás GORDA'
      }
    }

    this.personas.push({
      texto: this.nuevoNom,
      sexo: this.sexo,
      altura: this.altura,
      peso: this.peso
    });

    // bajo: <20 hombres <18 mujeres
    // sano: 20-25 hombres 18-25 mujeres
    //gordo: 25>

    // if(this.peso<50 && this.altura>160){
    //   this.titlee= this.nuevoNom+' estas FLACO'
    // }else if(this.peso<60 && this.altura<160){
    //   this.titlee=this.nuevoNom+' estas SANO'
    // }else if(this.peso>60 && this.altura<160){
    //   this.titlee=this.nuevoNom+' estas GORDO'
    // }else if(this.peso<60 && this.altura<160){
    //   this.titlee=this.nuevoNom+' estas SANO'
    // }else if(this.peso<60 && this.altura>160){
    //   this.titlee=this.nuevoNom+' estas FLACO'
    // }else{
    //   this.titlee=this.nuevoNom+' estas, Estás sanísimo bro'
    // }

  }


}
