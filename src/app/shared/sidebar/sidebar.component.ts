import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/gifs/service/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent  {

get historial(){
  return this.gifService.getHistorial;
}

constructor(private gifService: GifService){}

buscar(query: string){
  if(query.trim().length < 1){
    return;
  }
  this.gifService.buscar(query);
}



}
