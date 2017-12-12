import { Component } from '@angular/core';
import {Contacto} from '../contacto';
import {ContactosService} from '../contactos.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-ruta-b',
  templateUrl: './ruta-b.component.html',
  styleUrls: ['./ruta-b.component.css']
})
export class RutaBComponent  {

  constructor(
    private _contactosService: ContactosService,
    private _router: Router
  ) { }


  

  crearContacto(contacto: Contacto) {
    this._contactosService.agregarContacto(contacto);
    this._router.navigate(['/lista-contactos'])
  }

}
