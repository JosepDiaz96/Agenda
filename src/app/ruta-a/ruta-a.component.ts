import { Component, OnInit } from '@angular/core';
import {Contacto} from '../contacto';
import {ContactosService} from '../contactos.service';

@Component({
  selector: 'app-ruta-a',
  templateUrl: './ruta-a.component.html',
  styleUrls: ['./ruta-a.component.css']
})
export class RutaAComponent implements OnInit {
  
  nombres: Contacto[];
  contactoSeleccionado: Contacto;
  // Para hacer la inyección de dependencias de un servicio debemos 
    // hacerlo en el constructor de la clase. Anotamos un parámetro con
    // el tipo de servicio a inyectar y añadimos el modificador de
    // acceso correspondiente al parámetro.


  constructor(private _contactosService: ContactosService) { }

      //El hook 'OnInit' se ejecuta cuando el componente tiene asociado
    // su template correspondiente, por tanto es el momento ideal para
    // enlazar datos con ellos.
    
    ngOnInit(): void {
      
      this.nombres = this._contactosService.obtenerContactos();
    }

     eliminarContacto(nombre: Contacto): void {
     this._contactosService.eliminarContacto(nombre);
     this.nombres = this._contactosService.obtenerContactos();
     
    }

    verDetalles(nombre : Contacto): void{
      this.contactoSeleccionado = nombre;
    }
    

}
