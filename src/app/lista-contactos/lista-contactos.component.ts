import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contacto} from '../contacto'

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent {
// Con el decorador 'Input' exponemos un atributo para que un 
// componente padre pueda enlazar datos al hijo.
  
  @Input() contactos: Contacto [];

// Con el decorador 'Output' exponemos un evento para que un 
// lista-contactos.component.csscomponente padre pueda susribirse a él. 
// Además, este evento debe ser un 'EventEmitter' del tipo deseado.

 @Output() botonEliminarPulsado = new EventEmitter<Contacto>();
 @Output() contactoSeleccionado = new EventEmitter<Contacto>();

// Notificamos datos al componente padre gracias a la función 
//'emit' de nuestro 'EventEmitter'.

 notificarEliminarContacto(contacto: Contacto): void {
   this.botonEliminarPulsado.emit(contacto);
 }

 notificarSeleccionarContacto(contacto: Contacto): void{
   this.contactoSeleccionado.emit(contacto);
 }
}


