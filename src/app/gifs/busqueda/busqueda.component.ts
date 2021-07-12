import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../service/gif.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  @ViewChild('txtBusqueda') txtBuscar!: ElementRef;

  constructor(private gifService: GifService) { }

  buscar() {
    const query: string = this.txtBuscar.nativeElement.value;

    if(query.trim().length < 1)
    {
      return;
    }
    this.gifService.buscar(query);
    this.txtBuscar.nativeElement.value = ''


  }


}
