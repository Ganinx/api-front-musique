import { Injectable } from '@angular/core';
import {environnement} from "../environnement/environnement";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../models/user";
import {catchError, Observable, retry, throwError} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environnement.apiUrl + "users"

  authUrl = environnement.authUrl

  isAuthenticated = false
  constructor(private httpClient:HttpClient) { }


  errorHandler(error: HttpErrorResponse){
    let errorMessage =''
    if (error.error instanceof ErrorEvent){
      console.log(error.error.message)
    }else{
      console.log(error.error.message)
    }


    return throwError(() =>new ErrorEvent(error.error["hydra:description"]))
  }


    errorHandlerLogin(error: HttpErrorResponse){
        let errorMessage =''
        if (error.error instanceof ErrorEvent){
            console.log(error.error.message)
        }else{
            console.log(error.error.message)
        }


        return throwError(() =>new ErrorEvent(error.error["message"]))
    }

  registerUser(user:User):Observable<User>{
    return this.httpClient.post<User>(this.apiUrl,user).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }


  login(user:User):Observable<User>{
    return this.httpClient.post(this.authUrl,user).pipe(
      retry(1),
      catchError(this.errorHandlerLogin)
    )
  }

  isLogin(){
    this.isAuthenticated = true;
  }

  isLogout(){
    this.isAuthenticated = false
  }

}
