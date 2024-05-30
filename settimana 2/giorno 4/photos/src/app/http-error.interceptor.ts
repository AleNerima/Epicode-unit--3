import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { iPhotos } from './Interfaces/photos';

export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<iPhotos>, next: HttpHandler): Observable<HttpEvent<iPhotos>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Errore HTTP:', error);
        return throwError(error);
      })
    );
  }
}
