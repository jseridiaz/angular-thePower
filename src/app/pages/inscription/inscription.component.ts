import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription',
  imports: [],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss',
})
export class InscriptionComponent {
  public handleSubmit() {
    console.log('formulario enviado');
  }
}
