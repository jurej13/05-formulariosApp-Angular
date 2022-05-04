import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario !: NgForm
  initForm = {
    producto : 'lalal',
    precio : 10,
    existencias : 10
  }
  constructor() { }

  ngOnInit(): void {
  }
  // guardar(miFormulario: NgForm){
  
  nombreValido() : boolean{
    // miFormulario?.controls ese ? hace referencia, a que si tengo
    // formulario recien siga con lo demas.
    return this.miFormulario?.controls['producto']?.invalid &&
            this.miFormulario?.controls['producto']?.touched
  }
  precioValido() : boolean{
    return this.miFormulario?.controls['precio']?.touched &&
        this.miFormulario?.controls['precio']?.value < 0
  }
  guardar(){
    console.log(this.miFormulario)
    this.miFormulario.resetForm({
      precio:0,
      existencias:0
    });
  }

}
