import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iPhotos } from './Interfaces/photos';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private url = 'https://jsonplaceholder.typicode.com/photos';
  private preferiti: iPhotos[] = []; // Array dei preferiti

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<iPhotos[]> {
    return this.http.get<iPhotos[]>(this.url);
  }

  aggiungiAiPreferiti(photo: iPhotos): void {
    // Controllo se la foto è già presente nei preferiti
    const exists = this.preferiti.some(p => p.id === photo.id);
    if (!exists) {
      // Aggiungo la foto ai preferiti solo se non è già presente
      this.preferiti.push(photo);
    }
  }

  rimuoviDaiPreferiti(photo: iPhotos): void {
    // Rimuovo la foto dai preferiti
    this.preferiti = this.preferiti.filter(p => p.id !== photo.id);
  }

  getPreferiti(): iPhotos[] {
    // Restituisco una copia dell'array dei preferiti
    return [...this.preferiti];
  }
}
