import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../photos.service';
import { iPhotos } from '../../Interfaces/photos';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.scss']
})
export class PreferitiComponent implements OnInit {
  rimuoviDaPreferiti(photo: iPhotos): void {
    this.photosService.rimuoviDaiPreferiti(photo);

    this.preferiti = this.photosService.getPreferiti();
  }
  preferiti: iPhotos[] = []; // Array per memorizzare le foto preferite

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
    this.preferiti = this.photosService.getPreferiti();
  }
}
