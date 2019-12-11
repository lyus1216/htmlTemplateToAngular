import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  apiUrl = "app/users";

  constructor(private http: HttpClient) {}

  handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  signup(formData: NgForm) {
    return this.http.post(`${this.apiUrl}/signup`, formData).pipe(
      tap(user => {
        console.log(user);
      }),
      catchError(this.handleError("signup", []))
    );
  }

  login(formData: NgForm) {
    return this.http.post(`${this.apiUrl}/login`, formData).pipe(
      tap(user => {
        console.log(user);
      }),
      catchError(this.handleError("login", []))
    );
  }

  logout() {
    console.log("Log out!");
  }
}
