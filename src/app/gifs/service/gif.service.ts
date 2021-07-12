import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
import { Datum, GifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _apiKey = "NFwtyeavtGH5onIAmo3TdtLKbdojfQ3t";
  private _apiURL = "http://api.giphy.com/v1/gifs";
  private _historial: string[] = [];

  public searchResponse: Datum[]=[];

  get getHistorial(){
    return [...this._historial];
  }

  buscar(query: string)
  {
    query = query.trim().toLocaleLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.slice(0,10);
    }

    const params = new HttpParams()
      .set('api_key',this._apiKey)
      .set('limit','10')
      .set('q',query);
      

    this.httpClient.get<GifsResponse>(this._apiURL+'/search',{params}).subscribe(p =>{
      this.searchResponse = p.data;
      localStorage.setItem('resultados',JSON.stringify(this.searchResponse));
    });

    localStorage.setItem('historial',JSON.stringify(this._historial));
  }
  constructor(private httpClient: HttpClient) {
    const histStorage  = localStorage.getItem('historial');
    if(histStorage){
      this._historial = JSON.parse(histStorage);
    }
    const restStorage  = localStorage.getItem('resultados');
    if(restStorage){
      this.searchResponse = JSON.parse(restStorage);
    }
   }
}
