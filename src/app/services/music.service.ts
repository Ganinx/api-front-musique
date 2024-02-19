import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environnement} from "../environnement/environnement";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Music} from "../models/music";

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  apiUrl =environnement.apiUrl +"musics"


  constructor(private httpClient:HttpClient) { }


  getAll():Observable<Music[]>{
    return this.httpClient.get<Music[]>(this.apiUrl).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }
  errorHandler(error: any){
    let errorMessage =''
    if (error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage =`Error code ${error.status}\nMessage:${error.message}`;
    }
    window.alert(errorMessage)
    return throwError(errorMessage)
  }
}
