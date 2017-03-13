import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola';
  nombre = 'Javascript'
  
  eventClick():void{
    this.nombre = this.nombre.toUpperCase()
    console.log('Hola estoy escuchando')
  }
}