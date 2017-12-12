import { Injectable } from '@angular/core';
import { Contacto } from './contacto';
@Injectable()
export class ContactosService {

  private _nombres: Contacto[] = [
    new Contacto(
      1, 
      'Tim', 
      'Cook',
      '555 666 777',
      'timcook@apple.com'

    ),
    new Contacto(
      2, 
      'Steve', 
      'Wozniak',
      '987 987 987',
      'steve.wozniak@apple.com'
    ),
    new Contacto(3, 'Bill', 'Gates'),

    new Contacto(4, 'Sundar', 'Pichai', null, 'sundar.pichai@google.es'),
    new Contacto(5, 'Elon', 'Musk', '666555888'),
    new Contacto(6, 'Satya', 'Nadella', '654987654', 'satya.nadella@google.com')

  ]

  obtenerContactos(): Contacto[] {
    return this._nombres
  }

  agregarContacto(contacto: Contacto): void {
    this._nombres.push(contacto);
  }

  eliminarContacto(nombre: Contacto): void {
    this._nombres = this._nombres.filter(n => n !== nombre);
   }

  constructor() { }

}


