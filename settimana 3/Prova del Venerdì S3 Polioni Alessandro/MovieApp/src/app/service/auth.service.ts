import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Auth, LoginData, SignUp } from '../interface/auth';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.srvr;

  private isLogged$ = new BehaviorSubject<boolean>(false);
  loggedStatus = this.isLogged$.asObservable();

  private users$ = new BehaviorSubject<SignUp[]>([]);
  userList = this.users$.asObservable();

  jwtSrv = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {
    this.http.get<SignUp[]>(`${this.apiUrl}users`).subscribe(usr => this.users$.next(usr));
  }


  login(cred: Auth): Observable<LoginData> {
    return this.http.post<LoginData>(`${this.apiUrl}login`, cred).pipe(
      tap((res: LoginData) => {
        if (res.accessToken) {
          localStorage.setItem('user', JSON.stringify(res));
          this.isLogged$.next(true);
          this.router.navigateByUrl('');
        } else {
          alert('Credenziali non valide');
        }
      }),
      catchError(this.handleError)
    );
  }

  // Metodo per la registrazione
  signup(formData: SignUp): Observable<LoginData> {
    return this.http.post<LoginData>(`${this.apiUrl}signup`, formData).pipe(
      tap((res: LoginData) => {
        if (res.accessToken) {
          localStorage.setItem('user', JSON.stringify(res));
          this.isLogged$.next(true);
          this.router.navigateByUrl('');
        }
      }),
      catchError(this.handleError)
    );
  }


  logout(): void {
    localStorage.removeItem('user');
    this.isLogged$.next(false);
    this.router.navigateByUrl('auth/signin');
  }


  currentLoggedUser(): Observable<SignUp[]> | undefined {
    const data = JSON.parse(localStorage.getItem('user') || '{}') as LoginData;
    if (data && data.user && data.user.email) {
      const email = data.user.email;
      return this.http.get<SignUp[]>(`${this.apiUrl}users?email=${email}`).pipe(
        catchError(this.handleError)
      );
    } else {
      this.isLogged$.next(false);
      return undefined;
    }
  }


  verifyLogin(): void {
    const data = JSON.parse(localStorage.getItem('user') || '{}') as LoginData;
    if (data && data.accessToken) {
      const isExpired = this.jwtSrv.isTokenExpired(data.accessToken);
      this.isLogged$.next(!isExpired);
    } else {
      this.isLogged$.next(false);
    }
  }


  private handleError(error: any): Observable<never> {
    let errorMessage = 'Errore imprevisto';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Errore: ${error.error.message}`;
    } else {
      errorMessage = `Codice errore: ${error.status}\nMessaggio: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
