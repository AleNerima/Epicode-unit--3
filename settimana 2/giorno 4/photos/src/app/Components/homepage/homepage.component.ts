import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../photos.service';
import { iPhotos } from '../../Interfaces/photos';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  aggiungiAiPreferiti(photo: iPhotos): void {
    this.photosService.aggiungiAiPreferiti(photo);
  }
  photos: iPhotos[] = []; // Array per memorizzare le foto ottenute

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
    this.photosService.getPhotos().subscribe((photos: iPhotos[]) => {
      console.log('Array di foto ricevuto:', photos);
      // Mostra solo le prime 10 foto per esempio
      this.photos = photos.slice(0, 50);
    });
  }
}
