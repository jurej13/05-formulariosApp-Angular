import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  miFormulario : FormGroup = new FormGroup({
    nombre:new FormControl('Javier'),
    precio:new FormControl(0),
    existencias:new FormControl(15)
  })
  constructor() { }

  ngOnInit(): void {
  }

}
