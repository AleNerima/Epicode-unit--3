import { Injectable } from '@angular/core';
import { Auth, LoginData, SignUp } from '../interface/auth';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/';


  private isLogged$ = new BehaviorSubject<boolean>(false);
  loggedStatus = this.isLogged$.asObservable();

  private users$ = new BehaviorSubject<SignUp[]>([]);
  userList = this.users$.asObservable();


  jwtSrv = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {

    this.http.get<SignUp[]>(`${this.apiUrl}users`).subscribe(usr => this.users$.next(usr));
  }

  // Metodo per il login
  login(cred: Auth): Observable<LoginData> {
    return this.http.post<LoginData>(`${this.apiUrl}login`, cred).pipe(
      tap((res) => {
        console.log(res);
        if (res.accessToken) {
          localStorage.setItem('user', JSON.stringify(res));
          this.isLogged$.next(true);
          this.router.navigateByUrl('');
        } else {
          alert('No login for you');
        }
      })
    );
  }


  signup(formData: SignUp): Observable<any> {
    return this.http.post<LoginData>(`${this.apiUrl}signup`, formData).pipe(
      tap((res) => {
        console.log(res);
        if (res.accessToken) {
          localStorage.setItem('user', JSON.stringify(res));
          this.isLogged$.next(true);
          this.router.navigateByUrl('');
        }
      })
    );
  }

  // Metodo per il logout
  logout(): void {
    localStorage.removeItem('user');
    this.isLogged$.next(false);
    this.router.navigateByUrl('auth/signin');
  }

  // Metodo per ottenere l'utente attualmente loggato
  currentLoggedUsed(): Observable<SignUp[]> | undefined {
    const dati = this.getLoginData;
    if (dati) {
      const email = dati.user.email;
      return this.http.get<SignUp[]>(`${this.apiUrl}users?email=${email}`);
    } else {
      this.isLogged$.next(false);
      return undefined;
    }
  }

  // Metodo per ottenere i dati di login dal LocalStorage
  private get getLoginData(): LoginData | null {
    const ls = JSON.parse(localStorage.getItem('user')!) as LoginData | null;
    return ls ? ls : null;
  }

  // Metodo per verificare lo stato di login
  verifyLogin(): void {
    const data = this.getLoginData;
    if (data) {
      const isExpired = this.jwtSrv.isTokenExpired(data.accessToken);
      this.isLogged$.next(!isExpired);
    } else {
      this.isLogged$.next(false);
    }
  }
}
